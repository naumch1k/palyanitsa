import classNames from 'classnames/bind';

import { Button } from '../ui/button';
import { TextLink } from '../ui/text-link';
import styles from './footer.module.css';

const cn = classNames.bind(styles);

export const Footer = () => {
  return (
    <div className={cn('footer')}>
      <Button
        href="mailto:naumchikirina@yahoo.com"
        size="l"
        isLink
        label="Email us"
      />
      <p className={cn('text')}>designed and built by {' '}
        <TextLink
          href="https://naumchik.me/"
          isOutsideLink
        >
          Irina Naumchik
        </TextLink>
      </p>
    </div>
  );
};
