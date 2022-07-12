import classNames from 'classnames/bind';

import styles from './homepage-layout-headline.module.css';

const cn = classNames.bind(styles);

export const HomepageLayoutHeadline = ({ children }) => {
  return (
    <section className={cn('root')}>
      {children}
    </section>
  );
};
