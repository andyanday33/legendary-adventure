import React, { useEffect, useState } from "react";
import { ProjectData, getSortedData } from "@/utils/parseProjectsMd";
import { Project } from "@/components/Project";
import { GetStaticProps } from "next";
import styles from "@/styles/Projects.module.scss";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface ProjectProps {
  data: ({ id: string; content: string } & ProjectData)[];
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  const router = useRouter();
  const { tag } = router.query;
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (!tag) setFilteredData(data);
    if (typeof tag === "string")
      setFilteredData(data.filter((d) => (tag ? d.tags?.includes(tag) : d)));
  }, [tag, data]);

  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <h1>
          /Projects
          {tag &&
            typeof tag === "string" &&
            `/${tag.slice(0, 1).toUpperCase() + tag.slice(1)}`}
        </h1>
        {tag && <Link href="/projects">Clear Filter</Link>}
      </div>

      <ul className={styles.projectList}>
        <AnimatePresence mode="popLayout">
          {filteredData.length > 0 ? (
            filteredData.map((project) => (
              <motion.li
                layout
                key={project.id}
                className={styles.projectLi}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <Project
                  meta={{ title: project.title, tags: project.tags }}
                  content={project.content}
                  title={project.title!}
                  link={project.link}
                />
              </motion.li>
            ))
          ) : (
            <p className={styles.notFound}>
              Looks like there are no projects I am allowed to talk about...
            </p>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedData();
  return {
    props: {
      data,
    },
  };
};

export default Projects;
