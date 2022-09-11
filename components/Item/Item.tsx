import Image from "next/image";
import { ICategory, IItem } from "../../lib/types";
import classes from "./Item.module.css";
import Color from "color";
import { useState } from "react";

export type ItemProps = { mappings: ICategory["mappings"], priority: boolean } & IItem;

const Item: React.FC<ItemProps> = ({
  title,
  date,
  link,
  tags,
  authors,
  description,
  primaryColour,
  secondaryColour,
  backgroundImg,
  priority,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundColour = Color(secondaryColour)
    .darken(0.8)
    .desaturate(0.5)
    .fade(0.1);
  const darkerText = Color(secondaryColour).darken(0.1);

  return (
    <div className={classes.item}>
      {backgroundImg && (
        <Image
          src={`/over9/static/images/film/${backgroundImg}`}
          alt={title}
          layout="fill"
          priority={priority}
          objectFit="cover"
          className={classes.image}
          style={{
            opacity: isLoaded ? 1 : 0,
          }}
          onLoadingComplete={() => {
            setIsLoaded(true);
          }}
        />
      )}
      <div
        className={classes.screen}
        style={{
          background: `linear-gradient(270deg, transparent, ${backgroundColour})`,
        }}
      />
      <div
        className={classes.content}
        style={{
          color: secondaryColour,
        }}
      >
        <h2
          className={classes.title}
          style={{
            color: primaryColour,
          }}
        >
          <a href={link} rel="noopener noreferrer" target="_blank">
            {title}
          </a>
        </h2>
        <h3 className={classes.subtitle}>
          {date && <span>{new Date(date).getFullYear()} | </span>}
          {tags && <span>{tags.join(", ")}</span>}
        </h3>

        {authors && (
          <p style={{ color: darkerText.string() }}>{authors.join(", ")}</p>
        )}
        {description && (
          <p style={{ color: darkerText.string() }}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Item;
