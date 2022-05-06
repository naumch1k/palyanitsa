export const NavbarSection = (props) => {
  const {
    primary,
    children,
  } = props;

  const Tag = primary ? 'nav' : 'div';

  return (
    <Tag>
      {children}
    </Tag>
  );
};
