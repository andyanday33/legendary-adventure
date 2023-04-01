import { motion } from "framer-motion";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { ProjectData, getSortedData } from "@/utils/parseProjectsMd";
import { Project } from "@/components/Project";
import { GetStaticProps } from "next";

interface ProjectProps {
  data: ({ id: string; content: string } & ProjectData)[];
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  return (
    <div>
      {data.map((project) => (
        <Project
          key={project.id}
          meta={{ title: project.title }}
          content={project.content}
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
