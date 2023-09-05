import placeholderImage from '../../../shared/images/placeholder.jpg';
import AnnaBarbonImage from '../../home/assets/homepage-team/anna-barbon.jpg';

export const mockData = {
  title: 'Stories',
  stories: [
    {
      firstName: 'Anna',
      heading: 'Help Anna Pursue Her Dreams in Data Science',
      intro: [
        'Anna has been passionate about IT since childhood and has always dreamed of a career in data science. For her, mastering Python and breaking into data science represents an opportunity to make a meaningful impact. She approaches every project with great enthusiasm and commitment to learning and growth.',
        ' However, she is currently facing a significant problem with her laptop. It frequently breaks down, freezes, and has malfunctioning sound and camera. This is making it hard for Anna to attend team meetings and slowing her progress.',
      ],
      quote: 'With a new laptop, I could transcend my current limitations. It would empower me to engage more effectively in Python tasks and collaborate seamlessly with my teammates. The improved efficiency and functionality would open doors to achieve greater heights in my chosen field.',
      paragraphs: [
        'Anna\'s family consists of two sisters, a father, and a mother. The family\'s financial situation is challenging, with high aspirations but limited resources. Purchasing a new laptop is currently beyond their budget.',
      ],
      image: AnnaBarbonImage,
      links: {
        paypal: 'https://www.paypal.com/us/non-profit/fundraising/fundraising-online',
        goFundMe: 'https://www.gofundme.com/start',
      },
    },
    {
      firstName: 'Mariia',
      heading: 'Empower Mariia\'s Journey in ...',
      intro: [
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      ],
      quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ],
      image: placeholderImage,
    },
  ]
};
