import HeadlineDesktopImage from './disciplines-headline-desktop.jpg';
import HeadlineDesktopImageWebp from './disciplines-headline-desktop.webp';
import HeadlineTabletImage from './disciplines-headline-tablet.jpg';
import HeadlineTabletImageWebp from './disciplines-headline-tablet.webp';
import HeadlineMobileImage from './disciplines-headline-mobile.jpg';
import HeadlineMobileImageWebp from './disciplines-headline-mobile.webp';
import ArtIcon from './art-icon.svg';
import DesignIcon from './design-icon.svg';
import DevIcon from './dev-icon.svg';
import ProductIcon from './product-icon.svg';
import QAIcon from './qa-icon.svg';

export const disciplinesData = {
  title: 'Departments',
  subtitle: 'Get to know the heart and soul of the initiative - our diverse departments',
  headline_images: {
    desktop: HeadlineDesktopImage,
    desktopWebp: HeadlineDesktopImageWebp,
    tablet: HeadlineTabletImage,
    tabletWebp: HeadlineTabletImageWebp,
    mobile: HeadlineMobileImage,
    mobileWebp: HeadlineMobileImageWebp,
  },
  disciplines: [
    {
      id: '01',
      heading: 'Art',
      description: 'There is the heart of our creative universe, where our team of talented artists brings breathtaking visuals to life, weaving magic into every pixel and stroke.',
      icon: ArtIcon,
    },
    {
      id: '02',
      heading: 'Design',
      description: 'It\'s department, where boundless creativity merges with ingenious gameplay concepts, pushing the boundaries of imagination and bringing dreams to life.',
      icon: DesignIcon,
    },
    {
      id: '03',
      heading: 'Development',
      description: 'A universe where ingenuity soars and our exceptional team of developers is open to new challenges and turning imaginative ideas into functional realities.',
      icon: DevIcon,
    },
    {
      id: '04',
      heading: 'Quality Assurance',
      description: 'A space of constant growth, where every challenge is embraced as an opportunity to optimize and our QA testers are the guardians of excellence.',
      icon: QAIcon,
    },
    {
      id: '05',
      heading: 'Product / Project',
      description: 'A place where deadlines are met with determination and challenges with adaptability. Our PM team ensures smooth development, timely project completion, and effective communication - making it all happen!',
      icon: ProductIcon,
    },
  ]
};
