import classNames from 'classnames/bind';

import styles from './homepage-layout-about.module.css';

const cn = classNames.bind(styles);

export const HomepageLayoutAbout = ({ children }) => {
  return (
    <section className={cn('root')}>
      {children}
    </section>
  );
};
