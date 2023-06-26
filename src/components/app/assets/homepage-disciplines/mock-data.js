import HeadlineImage from './headline-image.jpg';
import GameDevIcon from './game-dev-icon.svg';
import WebIcon from './web-icon.svg';
import QAIcon from './qa-icon.svg';
import DesignIcon from './design-icon.svg';

export const disciplinesData = {
  tag: '02',
  title: 'Tracks',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet',
  headline_image: HeadlineImage,
  disciplines: [
    {
      id: '01',
      heading: 'Game Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: GameDevIcon,
    },
    {
      id: '02',
      heading: 'Web Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: WebIcon,
    },
    {
      id: '03',
      heading: 'Quality Assurance',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: QAIcon,
    },
    {
      id: '04',
      heading: 'Game Design / Art',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: DesignIcon,
    },
  ]
};
