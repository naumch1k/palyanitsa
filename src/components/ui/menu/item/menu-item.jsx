import PropTypes from 'prop-types';
import { useMenu } from '../menu.context';
import { styles } from '../menu.styles';

export const MenuItem = ({
  enterAnimationEnabled,
  children,
}) => {
  const { type } = useMenu();

  return (
    <li className={`${styles[type].item} ${enterAnimationEnabled ? `${styles[type].onEnter}` : ''}`}>
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  enterAnimationEnabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
