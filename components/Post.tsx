import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Post.module.scss";
import { PostData } from "@/utils/parsePostsMd";

type Props = {
  meta: Omit<PostData, "content">;
  content: string;
  title: string;
  link?: string;
};

export const Post = ({ meta, content, title, link }: Props) => {
  return (
    <div className={styles.post}>
      <h2>{title}</h2>
      {link && (
        <a href={link} className={styles.postLink}>
          Post Link
        </a>
      )}
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
