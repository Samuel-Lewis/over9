export interface IItem {
  title?: string;
  date?: string;
  link?: string;
  tags?: string[];
  authors?: string[];
  description?: string;
  colours?: {
    primary?: string;
    secondary?: string;
    background?: string;
    body?: string;
  };
  backgroundImg?: string;
}

export interface ICategory {
  title?: string;
  mappings?: Partial<Record<keyof IItem, string>>;
  items?: IItem[];
  honorables?: IItem[];
  disabled?: boolean;
}
