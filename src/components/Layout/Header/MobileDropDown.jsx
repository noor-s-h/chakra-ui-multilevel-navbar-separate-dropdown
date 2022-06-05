import {
  Button,
  List,
  Collapse,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';

import { ChevronDownIcon } from '@chakra-ui/icons';

import MobileMenu from './MobileMenu';

export default function MobileDropDown({ label, childrens, closeNav }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button w="100%" py=".5rem" variant="link" onClick={onToggle}>
        {label}
        <Icon
          as={ChevronDownIcon}
          transition="all .25s ease-in-out"
          transform={isOpen ? 'rotate(180deg)' : ''}
          w={6}
          h={6}
          ml="auto"
        />
      </Button>
      <Collapse in={isOpen} unmountOnExit>
        <List pl="1rem" borderLeft="1px" borderColor="gray.200">
          {childrens.map((childdata, index) => (
            <MobileMenu key={index} {...childdata} closeNav={closeNav} />
          ))}
        </List>
      </Collapse>
    </>
  );
}
