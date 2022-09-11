import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CategoryList from "../components/CategoryList/CategoryList";
import Item from "../components/Item/Item";
import { getCategories, getCategory } from "../lib/data";
import type { ICategory } from "../lib/types";
import Honorables from "../components/Honorables/Honorables";
import { ParsedUrlQuery } from "querystring";

export type CategoryPageProps = {
  category: string;
  data: ICategory;
};

const Category: NextPage<CategoryPageProps> = ({ category, data }) => {
  return (
    <>
      <CategoryList title={category}>
        {data.items
          ?.sort(
            (a, b) =>
              new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
          )
          .map((item, index) => (
            <Item {...item} key={item.title} mappings={data.mappings} priority={index < 2} />
          ))}
        {data.honorables && (
          <Honorables
            honorables={data.honorables.sort(
              (a, b) =>
                new Date(b.date ?? 0).getTime() -
                new Date(a.date ?? 0).getTime()
            )}
          />
        )}
      </CategoryList>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  category: string;
}

export const getStaticProps: GetStaticProps<{}, IParams> = async ({
  params,
}) => {
  const { category } = params as IParams;

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
