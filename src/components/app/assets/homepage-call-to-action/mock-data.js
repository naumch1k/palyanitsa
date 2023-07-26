import {
  TfiBriefcase,
  TfiEmail,
  TfiClipboard,
} from 'react-icons/tfi';
import HeadlineImage from './headline-image.jpg';

export const callToActionData = {
  tag: '05',
  title: 'Get in touch',
  subtitle: 'Connect with us directly: send letters and be updated on our progress',
  headline_image: HeadlineImage,
  general_info: [
    {
      icon: TfiBriefcase,
      heading: 'Our studio',
      paragraphs: [
        'Palianytsia Foundation',
      ],
    },
    {
      icon: TfiEmail,
      heading: 'General inquiries',
      paragraphs: [
        'hello@pgds.xyz',
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
