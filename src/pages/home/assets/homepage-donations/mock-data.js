import HeadlineImage from './headline-image.jpg';
import PaypalQRCode from './paypal-qr-code.png';
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
      text: 'PayPal allows you to make a secure donation using your credit or debit card, even if you don\'t have a PayPal account. You can choose to set up monthly donations to support us consistently. This will help us reach our goals more efficiently and effectively.',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
      link: 'https://www.paypal.com/donate/?hosted_button_id=9C7PBTQHEGFGA',
      linkText: 'Continue to PayPal',
    },
    {
      name: 'Venmo',
      note: '1.9% + $.10 per transaction',
      text: 'Simply scan a barcode with your camera or click the link below to open your Venmo app for a seamless and secure donation experience. Plus, because Venmo charges lower processing fees than PayPal, more of your contribution directly supports our mission.',
      full_description: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie.',
      ],
      link: 'https://www.venmo.com/u/pfoundation',
      linkText: 'Continue to Venmo',
      qrCode: VenmoQRCode,
    },
    {
      name: 'Zelle',
      note: 'No processing fees',
      text: 'When you use Zelle, you can be sure that 100% of your contribution goes to helping us reach our goals. With no processing fees, your generosity will have a more significant impact on our mission. Use your banking app to access Zelle and contribute to the Palianytsia Foundation by donating to',
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
