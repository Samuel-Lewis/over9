import Image from "next/image";
import { ICategory, IItem } from "../lib/types";
import classes from "./Item.module.css";

export type ItemProps = { mappings: ICategory["mappings"] } & IItem;

const Item: React.FC<ItemProps> = ({
  title,
  date,
  link,
  tags,
  authors,
  description,
  colours,
  backgroundImg,
}) => {
  return (
    <div className={classes.item}>
      {backgroundImg && (
        <Image
          src={`/images/films/${backgroundImg}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={classes.image}
        />
      )}
      <div
        className={classes.screen}
        style={{
          background: `linear-gradient(200deg, transparent, ${colours?.background})`,
        }}
      />
      <div className={classes.content}>
        <h2
          className={classes.title}
          style={{
            color: colours?.primary,
          }}
        >
          <a href={link}>{title}</a>
        </h2>
        <h3>
          {date && <span>{new Date(date).getFullYear()} | </span>}
          {tags && <span>{tags.join(", ")}</span>}
        </h3>

        {authors && <p>{authors.join(", ")}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Item;
