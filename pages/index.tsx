import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getCategories } from '../lib/data';
import classes from './index.module.css';

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
          content="A list of things I have rated 9 or more, out of 10."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.center}>
        <div className={classes.box}>
          <h1>Over 9</h1>
          <p>A list of things I have rated 9 or more, out of 10.</p>
          <p>
            There is no criteria. I have no qualifications. This is my opinion.
          </p>
        </div>

        <nav className={classes.nav}>
          {categories.map((c) => (
            <span key={c} className={classes.link}>
              <Link href={`/${c}`}>{c}</Link>
            </span>
          ))}
        </nav>
      </main>
      <footer className={classes.footer}>
        <p>
          Made by{' '}
          <a
            href="https://samuel-lewis.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Samuel Lewis
          </a>
        </p>
      </footer>
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
