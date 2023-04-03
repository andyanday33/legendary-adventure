import React from "react";
import { ProjectData, getSortedData } from "@/utils/parseProjectsMd";
import { Project } from "@/components/Project";
import { GetStaticProps } from "next";
import styles from "@/styles/Projects.module.scss";

interface ProjectProps {
  data: ({ id: string; content: string } & ProjectData)[];
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      {data.map((project, _) => (
        <Project
          key={project.id}
          meta={{ title: project.title, tags: project.tags }}
          content={project.content}
          order={_}
        />
      ))}
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
