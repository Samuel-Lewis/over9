import { ICategory } from '../../lib/types';

import AC from './assassins_creed.jpg';
import Factorio from './factorio.jpg';
import Minecraft from './minecraft.jpg';
import Skyrim from './skyrim.jpg';
import Nidhogg from './nidhogg.jpg';
import KingdomCome from './kingdom_come.jpg';

export const listGame: ICategory = {
  title: 'games',
  mappings: {
    authors: 'Studio',
  },
  items: [
    {
      link: 'https://www.igdb.com/games/minecraft',
      title: 'Minecraft',
      date: '18 November 2011',
      tags: ['Sandbox', 'Adventure', 'Survival'],
      authors: ['Mojang'],
      description: '',
      primaryColour: '#7aa560',
      secondaryColour: '#9c4c2d',
      nextImage: Minecraft,
    },
    {
      link: 'https://www.igdb.com/games/assassin-s-creed-ii',
      title: "Assassin's Creed II",
      date: '17 November 2009',
      tags: ['Adventure', 'Story'],
      authors: ['Ubisoft'],
      description: '',
      primaryColour: '#EDE8CA',
      secondaryColour: '#b26d56',
      nextImage: AC,
    },
    {
      link: 'https://www.igdb.com/games/factorio',
      title: 'Factorio',
      date: '14 August 2016',
      tags: ['Factory', 'Automation', 'Technical'],
      authors: ['Wube Software'],
      description: '',
      primaryColour: '#d17424',
      secondaryColour: '#966450',
      nextImage: Factorio,
    },
    {
      link: 'https://www.igdb.com/games/the-elder-scrolls-v-skyrim',
      title: 'The Elder Scrolls V: Skyrim',
      date: '10 November 2011',
      tags: ['Role-playing', 'Adventure', 'Atmospheric'],
      authors: ['Bethesda Game Studios'],
      description: '',
      primaryColour: '#C3CFCC',
      secondaryColour: '#a98348',
      nextImage: Skyrim,
    },
    {
      link: 'https://www.igdb.com/games/kingdom-come-deliverance',
      title: 'Kingdom Come: Deliverance',
      date: '13 February 2018',
      tags: ['Role-playing', 'Adventure', 'Historical'],
      authors: ['Warhorse Studios'],
      description: '',
      primaryColour: '#c1302b',
      secondaryColour: '#e7bb8d',
      nextImage: KingdomCome,
    },
    {
      link: 'https://www.igdb.com/games/nidhogg',
      title: 'Nidhogg',
      date: '13 January 2014',
      tags: ['Arcade', 'Fighting'],
      authors: ['Messhof'],
      description: '',
      primaryColour: '#ffeb0b',
      secondaryColour: '#ffa042',
      nextImage: Nidhogg,
    },
  ],
  honorables: [
    {
      link: 'https://www.igdb.com/games/plateup',
      title: 'PlateUp!',
      date: '4 August 2022',
    },
    {
      link: 'https://www.igdb.com/games/space-engineers',
      title: 'Space Engineers',
      date: '28 February 2019',
    },
    {
      link: 'https://www.igdb.com/games/rimworld',
      title: 'Rimworld',
      date: '17 October 2018',
    },
    {
      link: 'https://www.igdb.com/games/cyberpunk-2077',
      title: 'Cyberpunk 2077',
      date: '09 December 2020',
    },
    {
      link: 'https://www.igdb.com/games/borderlands',
      title: 'Borderlands',
      date: '20 October 2009',
    },
    {
      link: 'https://www.igdb.com/games/divinity-original-sin-ii',
      title: 'Divinity: Original Sin II',
      date: '14 September 2014',
    },
    {
      link: 'https://www.igdb.com/games/screencheat',
      title: 'Screencheat',
      date: '21 October 2014',
    },
    {
      link: 'https://www.igdb.com/games/star-wars-knights-of-the-old-republic',
      title: 'Star Wars: Knights of the Old Republic',
      date: '15 July 2003',
    },
    {
      link: 'https://www.igdb.com/games/terraria',
      title: 'Terraria',
      date: '16 May 2011',
    },
  ],
};
