import { ListItem } from '@chakra-ui/react';

import NavLink from './NavLink';
import DeskTopDropDown from './DeskTopDropDown';

export default function DeskTopMenu({
  label,
  href,
  childrens,
  depthLevel,
  closeNav,
}) {
  return (
    <ListItem>
      {childrens ? (
        <DeskTopDropDown
          label={label}
          childrens={childrens}
          depthLevel={depthLevel}
        />
      ) : (
        <NavLink href={href} closeNav={closeNav}>
          {label}
        </NavLink>
      )}
    </ListItem>
  );
}
