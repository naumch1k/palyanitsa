import {
  TfiBriefcase,
  TfiEmail,
  TfiClipboard,
} from 'react-icons/tfi';
import HeadlineDesktopImage from './call-to-action-headline-desktop.jpg';
import HeadlineDesktopImageWebp from './call-to-action-headline-desktop.webp';
import HeadlineTabletImage from './call-to-action-headline-tablet.jpg';
import HeadlineTabletImageWebp from './call-to-action-headline-tablet.webp';
import HeadlineMobileImage from './call-to-action-headline-mobile.jpg';
import HeadlineMobileImageWebp from './call-to-action-headline-mobile.webp';

export const callToActionData = {
  title: 'Get in touch',
  subtitle: 'Connect with us directly: send letters and be updated on our progress',
  headline_images: {
    desktop: HeadlineDesktopImage,
    desktopWebp: HeadlineDesktopImageWebp,
    tablet: HeadlineTabletImage,
    tabletWebp: HeadlineTabletImageWebp,
    mobile: HeadlineMobileImage,
    mobileWebp: HeadlineMobileImageWebp,
  },
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
