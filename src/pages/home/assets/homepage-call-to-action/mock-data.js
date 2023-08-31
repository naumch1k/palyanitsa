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
      heading: 'Legal name',
      paragraphs: [
        'Palianytsia Foundation',
      ],
    },
    {
      icon: TfiEmail,
      heading: 'Registered office',
      paragraphs: [
        '500 N Michigan Ave',
        'Suite 536',
        'Chicago, IL 60611',
      ],
    },
    {
      icon: TfiClipboard,
      heading: 'Purpose',
      paragraphs: [
        'We are a nonprofit focused on empowering Ukrainian youth affected by war through education, mentorship and evacuation assistance',
      ],
    },
  ],
};
