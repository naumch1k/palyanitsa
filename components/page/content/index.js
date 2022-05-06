import classNames from 'classnames/bind';

import styles from './page-content.module.css';

const cn = classNames.bind(styles);

export const PageContent = ({ children }) => {
  return (
    <div className={cn('root')}>
      {children}
    </div>
  );
};
