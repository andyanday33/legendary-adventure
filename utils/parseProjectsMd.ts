import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "data/projects");

export interface ProjectData {
  content: string;
  title?: string;
  startDate?: string;
  endDate?: string;
}

export function getSortedData() {
  const fileNames = fs.readdirSync(dataDirectory);
  const allData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, title, startDate, endDate } = matter(
      fileContents
    ) as ProjectData;
    console.log(content);
    return {
      id,
      content,
      title: title ?? "",
      startDate: startDate ?? "",
      endDate: endDate ?? "",
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
