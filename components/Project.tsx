import { ProjectData } from "@/utils/parseProjectsMd";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "@/styles/Project.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type Props = {
  meta: Omit<ProjectData, "content">;
  content: string;
  order: number;
};

export const Project: React.FC<Props> = ({ meta, content, order }) => {
  console.log(meta.tags);
  return (
    <AnimatePresence>
      <motion.div
        className={styles.project}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 100 }}
        transition={{ delay: order * 0.025 }}
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
    </AnimatePresence>
  );
};
