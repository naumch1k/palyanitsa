import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export const getShareUrls = url => [
  {
    platform: 'LinkedIn',
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`,
    icon: FaLinkedinIn,
  },
  {
    platform: 'Facebook',
    href: `https://www.facebook.com/sharer.php?u=${encodeURI(url)}`,
    icon: FaFacebookF,
  },
];
