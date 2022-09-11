import { ICategory, IItem } from '../../lib/types';
import classes from './Honorables.module.css';

export type HonorablesProps = {
  mappings?: ICategory['mappings'];
  honorables: IItem[];
};

const Honorables: React.FC<HonorablesProps> = ({ mappings, honorables }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Honorable Mentions</h2>
      <p>
        Honorable mentions, while have some Over 9 qualities, the whole piece is
        not Over 9 itself.
      </p>
      <ul className={classes.list}>
        {honorables.map((item) => (
          <li className={classes.listItem} key={item.title}>
            <a href={item.link}>
              {item.title}
              {item.date && ` (${item.date})`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Honorables;
