import { ProjectData } from "@/utils/parseProjectsMd";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Project.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  meta: Omit<ProjectData, "content">;
  content: string;
};

export const Project: React.FC<Props> = ({ meta, content }) => {
  return (
    <div className={styles.project}>
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
