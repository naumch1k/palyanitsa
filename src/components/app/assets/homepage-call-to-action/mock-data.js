import {
  TfiBriefcase,
  TfiEmail,
  TfiClipboard,
} from 'react-icons/tfi';
// TODO: purchase and replace HeadlineImage
import HeadlineImage from './headline-image.jpg';

export const callToActionData = {
  tag: '05',
  title: 'Get in touch',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing dolor sit amet',
  headline_image: HeadlineImage,
  general_info: [
    {
      icon: TfiBriefcase,
      heading: 'Our studio',
      paragraphs: [
        'Palyanitsa Foundation',
      ],
    },
    {
      icon: TfiEmail,
      heading: 'General inquiries',
      paragraphs: [
        'naumchikirina@yahoo.com',
      ],
    },
    {
      icon: TfiClipboard,
      heading: 'Legal',
      paragraphs: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      ],
    },
  ],
};
