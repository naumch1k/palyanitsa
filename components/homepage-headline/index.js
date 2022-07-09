import classNames from 'classnames/bind';

import styles from './homepage-headline.module.css';

const cn = classNames.bind(styles);

export const HomepageHeadline = () => (
  <section className={cn('root')}>
    <h1 className={cn('title')}>
      <span className={cn('title-accent')}>Palyanitsa</span>
      Game
      Dev
      Studio<span className={cn('dot')}/>
    </h1>
  </section>
);
