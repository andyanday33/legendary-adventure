import React from "react";
import styles from "@/styles/Posts.module.scss";
import Head from "next/head";
import { PostData, getSortedData } from "@/utils/parsePostsMd";
import { GetStaticProps } from "next";
import { Post } from "@/components/Post";

interface PostProps {
  data: ({ id: string; content: string } & PostData)[];
}

export default function Posts({ data }: PostProps) {
  return (
    <>
      <Head>
        <title>Berke&apos;s Posts</title>
        <meta name="description" content="Berke Anday Baloğlu's posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.posts}>
        <h1>/Posts</h1>
        <ul>
          {data.map((post) => (
            <Post
              key={post.id}
              meta={{ title: post.title }}
              content={post.content}
              title={post.title!}
              link={post.link}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getSortedData();
  return {
    props: {
      data,
    },
  };
};
