import PropTypes from 'prop-types';
import { MenuProvider } from './menu.context';
import { styles } from './menu.styles';

export const Menu = ({ type, children }) => {
  return (
    <ul className={`${styles[type].menu}`}>
      <MenuProvider value={{ type }}>
        {children}
      </MenuProvider>
    </ul>
  );
};

Menu.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

