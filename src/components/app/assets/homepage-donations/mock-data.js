import HeadlineImage from './headline-image.jpg';
import VenmoQRCode from './venmo-qr-code.png';

export const donationsData = {
  tag: '04',
  title: 'Donate',
  subtitle: 'Be a driving force of change, contributing to the development of this project',
  headline_image: HeadlineImage,
  donation_platforms: [
    {
      name: 'Paypal',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      link: 'https://www.paypal.com/us/home',
      linkText: 'Donate via PayPal website',
    },
    {
      name: 'Venmo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      link: 'https://venmo.com/',
      linkText: 'Donate via Venmo app',
      qrCode: VenmoQRCode,
    },
    {
      name: 'Zelle',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      link: '',
      linkText: 'Donate via Zelle website',
    }
  ]
};
