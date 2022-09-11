import { categories } from '../categories';
import { ICategory } from './types';

export const getCategories = (): string[] => {
  return categories
    .filter((cat) => !cat.disabled)
    .map((cat) => cat.title ?? '');
};

export const getCategory = (name: string): ICategory | undefined => {
  return categories.find((cat) => cat.title === name);
};
