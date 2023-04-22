import { ProjectData } from "@/utils/parseProjectsMd";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Project.module.scss";
import Link from "next/link";

type Props = {
  meta: Omit<ProjectData, "content">;
  content: string;
  title: string;
  link?: string;
};

export const Project: React.FC<Props> = ({ meta, content, title, link }) => {
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      {link && (
        <a href={link} className={styles.projectLink}>
          Project Link
        </a>
      )}
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
      <hr />
      <section className={styles.tags}>
        {meta.tags?.map((tag) => (
          <Link
            key={tag}
            href={{
              pathname: "/projects",
              query: { tag },
            }}
          >
            #{tag}
          </Link>
        ))}
      </section>
    </div>
  );
};
