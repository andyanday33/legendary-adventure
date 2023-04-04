import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "data/projects");

interface ParsedData {
  content: string;
  data: ProjectData;
}
export interface ProjectData {
  title?: string;
  startDate?: string;
  endDate?: string;
  tags?: string[];
  link?: string;
}

export function getSortedData() {
  const fileNames = fs.readdirSync(dataDirectory);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents) as ParsedData;

    return {
      id,
      content,
      title: data.title ?? "",
      startDate: data.startDate ?? "",
      endDate: data.endDate ?? "",
      tags: data.tags ?? [],
      link: data.link ?? "",
    };
  });

  return allData.sort((a, b) => {
    if (a.startDate && b.startDate)
      if (new Date(a.startDate) < new Date(b.startDate)) {
        return 1;
      } else {
        return -1;
      }
    return 1;
  });
}
