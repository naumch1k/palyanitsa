import GoFundMeQRCode from '../images/gofundme-qr-code.png';
import GoFundMeQRCodeWebp from '../images/gofundme-qr-code.webp';
import PayPalQRCode from '../images/paypal-qr-code.png';
import PayPalQRCodeWebp from '../images/paypal-qr-code.webp';
import VenmoQRCode from '../images/venmo-qr-code.png';
import VenmoQRCodeWebp from '../images/venmo-qr-code.webp';

const donationPlatforms = [
  {
    name: 'GoFundMe',
    note: '2.9% + $0.30 per transaction',
    description: [
      `Choose GoFundMe to make your donation and experience the power
      of community-driven giving. Unlike other platforms, GoFundMe is designed
      specifically for supporting charitable causes, making it a go-to choice
      for many donors. Rigorous policies for verifying fundraisers
      and protecting supporter interests ensure full transparency
      in how your donations are utilized.`
    ],
    full_description: [],
    link: 'https://gofund.me/f8a577d7',
    linkText: 'Continue to GoFundMe',
    qrCode: GoFundMeQRCode,
    qrCodeWebp: GoFundMeQRCodeWebp,
  },
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
    link: 'https://www.venmo.com/u/p-foundation',
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
