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
      note: '3.49% + $0.49 per transaction',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
      link: 'https://www.paypal.com/us/home',
      linkText: 'Donate via PayPal website',
    },
    {
      name: 'Venmo',
      note: '1.9% + $.10 per transaction',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
      link: 'https://venmo.com/',
      linkText: 'Donate via Venmo app',
      qrCode: VenmoQRCode,
    },
    {
      name: 'Zelle',
      note: 'No processing fees',
      text: 'Use your banking app to access Zelle and contribute to the Palianytsia Foundation by sending your donation to',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
      credentials: 'hello@pgds.xyz',
    }
  ],
  other: [
    {
      name: 'Volunteer / Become a Mentor',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
    },
  ],
};
