import { ProjectData } from "@/utils/parseProjectsMd";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Project.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  meta: Omit<ProjectData, "content">;
  content: string;
  order: number;
};

export const Project: React.FC<Props> = ({ meta, content, order }) => {
  return (
    <motion.div
      className={styles.project}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{
        delay: order * 0.025,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
      <hr />
      <section className={styles.tags}>
        {meta.tags?.map((tag) => (
          <Link key={tag} href={`/tags/${tag}`}>
            #{tag}
          </Link>
        ))}
      </section>
    </motion.div>
  );
};
