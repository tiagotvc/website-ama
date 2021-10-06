import P from 'prop-types';
import * as Styled from './styles';
import { MenuLink } from '../MenuLink';
import React from  'react';

export const NavDropDowns = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

NavDropDowns.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};