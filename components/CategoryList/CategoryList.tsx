import Head from 'next/head';
import classes from './CategoryList.module.css';
import { ICategory } from '../../lib/types';
import Link from 'next/link';

export type CategoryListProps = {
  children: React.ReactNode;
} & Pick<ICategory, 'title' | 'mappings'>;

const CategoryList: React.FC<CategoryListProps> = ({ children, title }) => {
  const fullTitle = `Over9${!!title && ` | ${title}`}`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
      </Head>
      <div className={classes.header}>
        <h1>
          <Link href="/">⮜</Link> {title}
        </h1>
      </div>
      <div>{children}</div>
    </>
  );
};

export default CategoryList;
