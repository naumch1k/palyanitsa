import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './logotype.module.css';

const cn = classNames.bind(styles);

import { Logo } from '../ui/logo';

export const Logotype = (props) => {
  const {
    href,
    title,
  } = props;

  return (
    <Link href={href}>
      <a className={cn('link')} title={title}>
        <Logo className={cn('image')}/>
      </a>
    </Link>
  );
};
