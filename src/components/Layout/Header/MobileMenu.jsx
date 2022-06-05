import { ListItem } from '@chakra-ui/react';

import NavLink from './NavLink';
import MobileDropDown from './MobileDropDown';

export default function MobileMenu({ label, href, childrens, closeNav }) {
  return (
    <ListItem>
      {childrens ? (
        <MobileDropDown
          label={label}
          childrens={childrens}
          closeNav={closeNav}
        />
      ) : (
        <NavLink href={href} closeNav={closeNav}>
          {label}
        </NavLink>
      )}
    </ListItem>
  );
}
