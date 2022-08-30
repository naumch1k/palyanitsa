import IvanPic from './ivan.jpg';
import AlexPic from './alex.jpg';
import JulianaPic from './juliana.jpg';
import GeorgePic from './george.jpg';
import DmytroPic from './dmytro.jpg';
import ArtemPic from './artem.jpg';

export const teamData = {
  title: 'Meet Our Team',
  description: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  ],
  team: [
    {
      id: 1,
      image: IvanPic,
      name: 'Ivan',
      role: 'Developer',
      cardSize: 'Large'
    },
    {
      id: 2,
      image: AlexPic,
      name: 'Alex',
      role: 'Designer',
      cardSize: 'Large'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1554410637-1a8267402b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      name: 'Caue',
      role: 'Mainly teaches Ivan',
      cardSize: 'Medium'
    },
    {
      id: 4,
      image: JulianaPic,
      name: 'Julianna',
      role: 'Designer',
      cardSize: 'Medium'
    },
    {
      id: 5,
      image: GeorgePic,
      name: 'George',
      role: 'Designer',
      cardSize: 'Large'
    },
    {
      id: 6,
      image: DmytroPic,
      name: 'Dmytro',
      role: 'Project Manager',
      cardSize: 'Small'
    },
    {
      id: 7,
      image: ArtemPic,
      name: 'Artem',
      role: 'Designer / Team Lead',
      cardSize: 'Large'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1554410637-1a8267402b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      name: 'Platon',
      role: 'Developer / Designer'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1554410637-1a8267402b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
      name: 'Caleb',
      role: 'He supports us'
    }
  ]
};
