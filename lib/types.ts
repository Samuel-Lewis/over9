import { StaticImageData } from 'next/image';

export interface IItem {
  title?: string;
  date?: string;
  link?: string;
  tags?: string[];
  authors?: string[];
  description?: string;
  primaryColour?: string;
  secondaryColour?: string;
  backgroundImg?: StaticImageData;
}

export interface ICategory {
  title?: string;
  mappings?: Partial<Record<keyof IItem, string>>;
  items: IItem[];
  honorables?: IItem[];
  disabled?: boolean;
}
