import { ICategory } from '../../lib/types';

import Magician from './magician.jpg';
import Leviathan from './leviathan.jpg';
import WeAreLegion from './wearelegion.jpg';
import ProjectHailMary from './projecthailmary.jpg';

export const listBooks: ICategory = {
  title: 'books',
  mappings: {
    authors: 'Authors',
  },
  items: [
    {
      link: 'https://www.goodreads.com/book/show/43916',
      title: 'Magician',
      date: '1 October 1982',
      tags: ['Fantasy', 'Magic'],
      authors: ['Raymond E. Feist'],
      description: 'Riftwar Saga #1 - #2',
      primaryColour: '#A65526',
      secondaryColour: '#91A3D9',
      nextImage: Magician,
    },
    {
      link: 'https://www.goodreads.com/book/show/8855321',
      title: 'Leviathan Wakes',
      date: '2 June 2011',
      tags: ['Science Fiction', 'Space Opera'],
      authors: ['James S.A. Corey'],
      description: 'The Expanse #1',
      primaryColour: '#D91818',
      secondaryColour: '#6D96A6',
      nextImage: Leviathan,
    },
    {
      link: 'https://www.goodreads.com/book/show/32109569',
      title: 'We Are Legion (We Are Bob)',
      date: '2 June 2011',
      tags: ['Science Fiction', 'Space Opera'],
      authors: ['Dennis E. Taylor'],
      description: 'Bobiverse #1',
      primaryColour: '#05F2AF',
      secondaryColour: '#0455BF',
      nextImage: WeAreLegion,
    },
    {
      link: 'https://www.goodreads.com/book/show/54493401',
      title: 'Project Hail Mary',
      date: '4 May 2021',
      tags: ['Science Fiction', 'Thriller'],
      authors: ['Andy Weir'],
      description: '',
      primaryColour: '#D9AF32',
      secondaryColour: '#F2E085',
      nextImage: ProjectHailMary,
    },
  ],
  honorables: [
    {
      link: 'https://www.goodreads.com/book/show/186074',
      title: 'The Name of the Wind',
      date: '27 March 2007',
    },
    {
      link: 'https://www.goodreads.com/book/show/29780253',
      title: 'Born a Crime',
      date: '15 November 2016',
    },
  ],
};
