import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMenu } from '../menu.context';
import { styles } from '../menu.styles';

export const MenuItem = ({
  enterAnimationEnabled,
  href,
  text,
  current,
  ...restProps
}) => {
  const { type } = useMenu();

  return (
    <li className={`${styles[type].item} ${enterAnimationEnabled ? `${styles[type].onEnter}` : ''}`}>
      <Link
        className={`${styles[type].link} ${current ? `${styles[type].current}` : ''}`}
        to={href}
        {...restProps}
      >
        {text}
      </Link>
    </li>
  );
};

MenuItem.propTypes = {
  enterAnimationEnabled: PropTypes.bool,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  current: PropTypes.bool,
};
