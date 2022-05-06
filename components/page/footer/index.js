import classNames from 'classnames/bind';

import styles from './page-footer.module.css';

const cn = classNames.bind(styles);

export const PageFooter = ({ children }) => {
  return (
    <footer className={cn('root')}>
      {children}
    </footer>
  );
};
