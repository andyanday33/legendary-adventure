import { ProjectData } from "@/utils/parseProjectsMd";
import React from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  meta: Omit<ProjectData, "content">;
  content: string;
};

export const Project: React.FC<Props> = ({ meta, content }) => {
  return (
    <>
      <h2>{meta.title}</h2>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};
