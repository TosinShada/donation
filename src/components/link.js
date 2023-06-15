/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import NextLink from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, isExternal, children, ...rest }) {
  return (
    <MenuLink
      path={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      label={label}
      isExternal={isExternal}
      {...rest}
    />
  );
}
export function MenuLink({ path, label, isExternal, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A href={path} {...rest} sx={styles.navigation} target={isExternal ? '_blank' : ''}>{children ? children : label}</A>
    </NextLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A href={path} {...rest}>{children ? children : label}</A>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'}
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'white',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    border: '2px solid white',
    pt: 3,
    pb: 3,
    pl: 5,
    pr: 5,
    ':hover': {
      backgroundColor: 'white',
      color: 'primary'
    },
  },
  navigation: {
    textDecoration: 'none',
    color: 'white',
  },
};
