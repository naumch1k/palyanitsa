import PayPalQRCode from '../images/paypal-qr-code.png';
import PayPalQRCodeWebp from '../images/paypal-qr-code.webp';
import VenmoQRCode from '../images/venmo-qr-code.png';
import VenmoQRCodeWebp from '../images/venmo-qr-code.webp';

const donationPlatforms = [
  {
    name: 'PayPal',
    note: '3.49% + $0.49 per transaction',
    description: [
      `PayPal allows you to make a secure donation using
      your credit or debit card, even if you don\'t have a PayPal account.
      You can choose to set up monthly donations to support us consistently.
      This will help us reach our goals more efficiently and effectively.`
    ],
    full_description: [],
    link: 'https://www.paypal.com/donate/?hosted_button_id=9C7PBTQHEGFGA',
    linkText: 'Continue to PayPal',
    qrCode: PayPalQRCode,
    qrCodeWebp: PayPalQRCodeWebp,
  },
  {
    name: 'Venmo',
    note: '1.9% + $.10 per transaction',
    description:[
      `Simply click the link below to open your Venmo app for a seamless
      and secure donation experience. Plus, because Venmo charges lower
      processing fees than PayPal, more of your contribution directly
      supports our mission.`
    ],
    full_description: [],
    link: 'https://www.venmo.com/u/pfoundation',
    linkText: 'Continue to Venmo',
    qrCode: VenmoQRCode,
    qrCodeWebp: VenmoQRCodeWebp,
  },
  {
    name: 'Zelle',
    note: 'No processing fees',
    description: [
      `When you use Zelle, you can be sure that 100% of your contribution
       goes to helping us reach our goals. With no processing fees, your
       generosity will have a more significant impact on our mission.
       Use your banking app to access Zelle and contribute to the
       Palianytsia Foundation by donating to `,
    ],
    full_description: [],
    credentials: [
      'hello@pgds.xyz',
    ],
  },
  {
    name: 'Buy Me a Coffee',
    note: '5% transaction fee',
    description: [
      `Buy Me a Coffee is a simple and user-friendly platform for supporters.
      The platform offers multiple payment options, including PayPal and Stripe,
      making it easy for contributors to make one-time or recurring payments.
      The signup process is quick and straightforward, allowing you to start
      contributing in minutes.`,
    ],
    full_description: [],
    link: 'https://www.buymeacoffee.com/pfoundation',
    linkText: 'Continue to Buy Me a Coffee',
  },
];

export default donationPlatforms;
