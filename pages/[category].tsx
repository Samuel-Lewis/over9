import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CategoryList from "../components/CategoryList";
import Item from "../components/Item";
import { getCategories, getCategory } from "../lib/data";
import type { ICategory } from "../lib/types";

export type CategoryPageProps = {
  category: string;
  data: ICategory;
};

const Category: NextPage<CategoryPageProps> = ({ category, data }) => {
  return (
    <>
      <CategoryList title={category}>
        {data.items?.map((item) => (
          <Item {...item} key={item.title} mappings={data.mappings} />
        ))}
      </CategoryList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params;

  return {
    props: {
      data: getCategory(category),
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fileNames = getCategories().map((f) => ({
    params: {
      category: f,
    },
  }));

  return {
    paths: fileNames,
    fallback: false,
  };
};

export default Category;
