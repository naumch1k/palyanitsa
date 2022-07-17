import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from './homepage-about.module.css';

const cn = classNames.bind(styles);

export const HomepageAbout = ({ title, items }) => (
  <>
    <h2 className={cn('title')}>{title}</h2>
    <ul className={cn('list')}>
      {items.map((item, idx) =>
        <li
          className={cn('list-item')}
          key={idx}
        >
          <div className={cn('icon')}>
            <Image
              src={item.icon}
              alt={`An icon for ${item.heading}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h3 className={cn('heading')}>{item.heading}</h3>
          <p className={cn('text')}>{item.text}</p>
        </li>
      )}
    </ul>
  </>
);
