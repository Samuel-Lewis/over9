import { ICategory } from '../../lib/types';

import JojoRabbit from './jojo_rabbit.jpg';
import SpiderMan from './spider-man_into_the_spider-verse.jpg';
import Dunkirk from './dunkirk.jpg';
import BladeRunner from './blade_runner_2049.png';
import BabyDriver from './baby_driver.jpg';
import GrandBudapest from './grand_budapest_hotel.jpg';
import Drive from './drive.jpg';
import DarkKnight from './dark_knight.jpg';
import HotFuzz from './hot_fuzz.jpg';
import Incredibles from './incredibles.jpg';
import FellowshipOfTheRing from './fellowship_of_the_ring.jpg';

export const listFilm: ICategory = {
  title: 'film',
  mappings: {
    authors: 'Director',
  },
  items: [
    {
      link: 'https://www.imdb.com/title/tt2584384/',
      title: 'Jojo Rabbit',
      date: '8 September 2019',
      tags: ['Comedy', 'Drama', 'War'],
      authors: ['Taika Waititi'],
      description: 'Roman Griffin Davis, Thomasin McKenzie, Scarlett Johansson',
      primaryColour: '#EBD7CA',
      secondaryColour: '#BF9975',
      nextImage: JojoRabbit,
    },
    {
      link: 'https://www.imdb.com/title/tt4633694/',
      title: 'Spider-Man: Into the Spider-Verse',
      date: '6 December 2018',
      tags: ['Animation', 'Action', 'Adventure'],
      authors: ['Bob Persichetti', 'Peter Ramsey', 'Rodney Rothman'],
      description: 'Shameik Moore, Jake Johnson, Hailee Steinfeld',
      primaryColour: '#D70E13',
      secondaryColour: '#AACEEA',
      nextImage: SpiderMan,
    },
    {
      link: 'https://www.imdb.com/title/tt5013056/',
      title: 'Dunkirk',
      date: '13 July 2017',
      tags: ['War', 'Action', 'Suspense'],
      authors: ['Christopher Nolan'],
      description: 'Fionn Whitehead, Barry Keoghan, Mark Rylance',
      primaryColour: '#B3DCEB',
      secondaryColour: '#8DB1C7',
      nextImage: Dunkirk,
    },
    {
      link: 'https://www.imdb.com/title/tt1856101/',
      title: 'Blade Runner 2049',
      date: '3 October 2017',
      tags: ['Sci-Fi', 'Thriller', 'Arthouse'],
      authors: ['Dennis Villeneuve'],
      description: 'Harrison Ford, Ryan Gosling, Ana de Armas',
      primaryColour: '#EBC18B',
      secondaryColour: '#D17411',
      nextImage: BladeRunner,
    },
    {
      link: 'https://www.imdb.com/title/tt3890160/',
      title: 'Baby Driver',
      date: '11 March 2017',
      tags: ['Action', 'Comedy', 'Music'],
      authors: ['Edgar Wright'],
      description: 'Ansel Elgort, Jon Bernthal, Jon Hamm',
      primaryColour: '#E14C6A',
      secondaryColour: '#EA7284',
      nextImage: BabyDriver,
    },
    {
      link: 'https://www.imdb.com/title/tt2278388/',
      title: 'The Grand Budapest Hotel',
      date: '6 February 2014',
      tags: ['Comedy', 'Arthouse', 'Adventure'],
      authors: ['Wes Anderson'],
      description: 'Ralph Fiennes, F. Murray Abraham, Mathieu Amalric',
      primaryColour: '#C3403C',
      secondaryColour: '#AB7A76',
      nextImage: GrandBudapest,
    },
    {
      link: 'https://www.imdb.com/title/tt0780504/',
      title: 'Drive',
      date: '20 May 2011',
      tags: ['Crime', 'Drama'],
      authors: ['Nicolas Winding Refn'],
      description: 'Ryan Gosling, Carey Mulligan, Bryan Cranston',
      primaryColour: '#D3DAD1',
      secondaryColour: '#12B6BF',
      nextImage: Drive,
    },
    {
      link: 'https://www.imdb.com/title/tt0468569/',
      title: 'The Dark Knight',
      date: '14 July 2008',
      tags: ['Action', 'Superhero', 'Dark'],
      authors: ['Christopher Nolan'],
      description: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      primaryColour: '#A9B7AF',
      secondaryColour: '#55818C',
      nextImage: DarkKnight,
    },
    {
      link: 'https://www.imdb.com/title/tt0425112/',
      title: 'Hot Fuzz',
      date: '13 February 2007',
      tags: ['Action', 'Comedy'],
      authors: ['Edgar Wright'],
      description: 'Simon Pegg, Nick Frost, Martin Freeman',
      primaryColour: '#8CBCB4',
      secondaryColour: '#C5D4CA',
      nextImage: HotFuzz,
    },
    {
      link: 'https://www.imdb.com/title/tt0317705/',
      title: 'The Incredibles',
      date: '27 October 2004',
      tags: ['Animation', 'Adventure', 'Superhero'],
      authors: ['Brad Bird'],
      description: 'Craig T. Nelson, Samuel L. Jackson, Holly Hunter',
      primaryColour: '#D61721',
      secondaryColour: '#E5652D',
      nextImage: Incredibles,
    },
    {
      link: 'https://www.imdb.com/title/tt0120737/',
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      date: '10 December 2001',
      tags: ['Adventure', 'Fantasy'],
      authors: ['Peter Jackson'],
      description: 'Elijah Wood, Ian McKellen, Orlando Bloom',
      primaryColour: '#C3CFB7',
      secondaryColour: '#B7C8C1',
      nextImage: FellowshipOfTheRing,
    },
  ],
  honorables: [
    {
      link: 'https://www.imdb.com/title/tt1745960/',
      title: 'Top Gun: Maverick',
      date: '2022',
    },
    {
      link: 'https://www.imdb.com/title/tt1160419/',
      title: 'Dune',
      date: '2021',
    },
    {
      link: 'https://www.imdb.com/title/tt7286456/',
      title: 'Joker',
      date: '2019',
    },
    {
      link: 'https://www.imdb.com/title/tt3501632/',
      title: 'Thor: Ragnarok',
      date: '2017',
    },
    {
      link: 'https://www.imdb.com/title/tt3315342/',
      title: 'Logan',
      date: '2017',
    },
    {
      link: 'https://www.imdb.com/title/tt4116284/',
      title: 'The Lego Batman Movie',
      date: '2017',
    },
    {
      link: 'https://www.imdb.com/title/tt2543164/',
      title: 'Arrival',
      date: '2016',
    },
    {
      link: 'https://www.imdb.com/title/tt2872718/',
      title: 'Nightcrawler',
      date: '2014',
    },
    {
      link: 'https://www.imdb.com/title/tt3416742/',
      title: 'What We Do in the Shadows',
      date: '2014',
    },
    {
      link: 'https://www.imdb.com/title/tt2015381/',
      title: 'Guardians of the Galaxy',
      date: '2014',
    },
    {
      link: 'https://www.imdb.com/title/tt1074638/',
      title: 'Skyfall',
      date: '2012',
    },
    {
      link: 'https://www.imdb.com/title/tt1375666/',
      title: 'Inception',
      date: '2010',
    },
    {
      link: 'https://www.imdb.com/title/tt0432283/',
      title: 'Fantastic Mr Fox',
      date: '2009',
    },
    {
      link: 'https://www.imdb.com/title/tt0198781/',
      title: 'Monsters Inc.',
      date: '2001',
    },
  ],
};
