import HeadlineImage from './headline-image.jpg';
import DipperImage from './dipper.png';
import GideonImage from './gideon.png';
import MabelImage from './mabel.png';
import PacificaImage from './pacifica.png';
import SoosImage from './soos.png';
import StanImage from './stan.png';
import WendyImage from './wendy.png';

export const teamData = {
  tag: '03',
  title: 'Team',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet',
  headline_image: HeadlineImage,
  team: [
    {
      name: 'Dipper',
      roles: ['game'],
      image: DipperImage,
    },
    {
      name: 'Gideon',
      roles: ['web', 'design'],
      image: GideonImage,
    },
    {
      name: 'Mabel',
      roles: ['web'],
      image: MabelImage,
    },
    {
      name: 'Pacifica',
      roles: ['design'],
      image: PacificaImage,
    },
    {
      name: 'Soos',
      roles: ['mentor'],
      image: SoosImage,
    },
    {
      name: 'Stan',
      roles: ['mentor'],
      image: StanImage,
    },
    {
      name: 'Wendy',
      roles: ['game', 'web', 'design'],
      image: WendyImage,
    },
  ],
};
