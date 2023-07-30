import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dataDirectory = path.join(process.cwd(), "data/posts");

interface ParsedData {
  content: string;
  data: PostData;
}
export interface PostData {
  title?: string;
  writtenDate?: string;
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
      writtenDate: data.writtenDate ?? "",
      link: data.link ?? "",
    };
  });

  return allData.sort((a, b) => {
    if (a.writtenDate && b.writtenDate)
      if (new Date(a.writtenDate) < new Date(b.writtenDate)) {
        return 1;
      } else {
        return -1;
      }
    return 1;
  });
}
