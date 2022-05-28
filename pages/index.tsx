import type { GetStaticProps, NextPage } from "next";
import fs from "fs";
import Head from "next/head";
import path from "path";
import Link from "next/link";
import { getCategories } from "../lib/data";

export type NextPageProps = {
  categories: string[];
};

const Home: NextPage<NextPageProps> = ({ categories }) => {
  return (
    <div>
      <Head>
        <title>Over 9</title>
        <meta
          name="description"
          content="A list of things rated 9 (or over) out of 10."
        />
        {/* TODO: Change favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Content</main>
      {categories.map((c) => (
        <Link href={`/${c}`} key={c}>
          {c}
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      categories: getCategories(),
    },
  };
};

export default Home;
