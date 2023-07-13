import HeadlineImage from './headline-image.jpg';
import ArtIcon from './art-icon.svg';
import DesignIcon from './design-icon.svg';
import DevIcon from './dev-icon.svg';
import ProductIcon from './product-icon.svg';
import QAIcon from './qa-icon.svg';

export const disciplinesData = {
  tag: '02',
  title: 'Tracks',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet',
  headline_image: HeadlineImage,
  disciplines: [
    {
      id: '01',
      heading: 'Development',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: DevIcon,
    },
    {
      id: '02',
      heading: 'Art',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: ArtIcon,
    },
    {
      id: '03',
      heading: 'Design',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: DesignIcon,
    },
    {
      id: '04',
      heading: 'Product / Project',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: ProductIcon,
    },
    {
      id: '05',
      heading: 'Quality Assurance',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      icon: QAIcon,
    },
  ]
};
