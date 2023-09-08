import HeadlineDesktopImage from './donations-headline-desktop.jpg';
import HeadlineDesktopImageWebp from './donations-headline-desktop.webp';
import HeadlineTabletImage from './donations-headline-tablet.jpg';
import HeadlineTabletImageWebp from './donations-headline-tablet.webp';
import HeadlineMobileImage from './donations-headline-mobile.jpg';
import HeadlineMobileImageWebp from './donations-headline-mobile.webp';
import PaypalQRCode from './paypal-qr-code.png';
import PaypalQRCodeWebp from './paypal-qr-code.webp';
import VenmoQRCode from './venmo-qr-code.png';
import VenmoQRCodeWebp from './venmo-qr-code.webp';

export const donationsData = {
  title: 'Donate',
  subtitle: 'Be a driving force of change by contributing to the development of this project',
  headline_images: {
    desktop: HeadlineDesktopImage,
    desktopWebp: HeadlineDesktopImageWebp,
    mobile: HeadlineMobileImage,
    tablet: HeadlineTabletImage,
    tabletWebp: HeadlineTabletImageWebp,
    mobileWebp: HeadlineMobileImageWebp,
  },
  donation_platforms: [
    {
      name: 'Paypal',
      note: '3.49% + $0.49 per transaction',
      description: [
        'PayPal allows you to make a secure donation using your credit or debit card, even if you don\'t have a PayPal account. You can choose to set up monthly donations to support us consistently. This will help us reach our goals more efficiently and effectively.'
      ],
      full_description: [],
      link: 'https://www.paypal.com/donate/?hosted_button_id=9C7PBTQHEGFGA',
      linkText: 'Continue to PayPal',
      qrCode: PaypalQRCode,
      qrCodeWebp: PaypalQRCodeWebp,
    },
    {
      name: 'Venmo',
      note: '1.9% + $.10 per transaction',
      description:[
        'Simply click the link below to open your Venmo app for a seamless and secure donation experience. Plus, because Venmo charges lower processing fees than PayPal, more of your contribution directly supports our mission.'
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
        'When you use Zelle, you can be sure that 100% of your contribution goes to helping us reach our goals. With no processing fees, your generosity will have a more significant impact on our mission. Use your banking app to access Zelle and contribute to the Palianytsia Foundation by donating to ',
        'hello@pgds.xyz',
      ],
      full_description: [],
      // credentials: 'hello@pgds.xyz',
    },
    {
      name: 'Buy Me a Coffee',
      note: '5% transaction fee',
      description: [
        'Buy Me a Coffee is a simple and user-friendly platform for supporters. The platform offers multiple payment options, including PayPal and Stripe, making it easy for contributors to make one-time or recurring payments. The signup process is quick and straightforward, allowing you to start contributing in minutes.',
      ],
      full_description: [],
      link: 'https://www.buymeacoffee.com/pfoundation',
      linkText: 'Continue to Buy me a Coffee',
    },
  ],
  other: [
    {
      name: 'Volunteer / Become a Mentor',
      full_description: [
        'There are many ways you can volunteer to support our mission. From one-time options to ongoing collaborations, your involvement on behalf of children can create a ripple effect that changes their lives and the future we share.',
        'Drop us a line at hello@pgds.xyz',
        'We\'re always here and ready to chat!',
      ],
    },
  ],
};
