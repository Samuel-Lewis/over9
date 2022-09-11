import fs from "fs";
import path from "path";
import { ICategory } from "./types";

export const getCategories = (): string[] => {
  const categoriesDirectory = path.join(process.cwd(), "categories");
  return fs
    .readdirSync(categoriesDirectory)
    .filter((f) => !f.includes("disabled"))
    .map((f) => f.replace(/\.json$/, ""));
};

export const getCategory = (name: string): ICategory => {
  const dataPath = path.join(process.cwd(), "categories", `${name}.json`);
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
};
