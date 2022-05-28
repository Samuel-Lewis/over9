import Head from "next/head";
import { ICategory } from "../lib/types";

export type CategoryListProps = {
  children: React.ReactNode;
} & Pick<ICategory, "title" | "mappings">;

const CategoryList: React.FC<CategoryListProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Over9 | {title}</title>
      </Head>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
};

export default CategoryList;
