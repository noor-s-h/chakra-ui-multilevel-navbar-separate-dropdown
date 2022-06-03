import {
  Button,
  List,
  ListItem,
  Popover,
  Icon,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

export default function DeskTopMenu({
  label,
  href,
  childrens,
  depthLevel,
  closeNav,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  depthLevel = depthLevel + 1;
  const placement = depthLevel > 1 ? "right-start" : "bottom";

  return (
    <ListItem>
      {childrens ? (
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          trigger="hover"
          gutter={0}
          placement={placement}
        >
          <PopoverTrigger>
            <Button
              py={depthLevel > 1 ? ".5rem" : "1rem"}
              p="1rem"
              w="100%"
              justifyContent="space-between"
              variant="link"
            >
              {label}
              <Icon
                as={depthLevel > 1 ? ChevronRightIcon : ChevronDownIcon}
                w={5}
                h={5}
                ml={1}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent width="inherit" minW="10rem" bg="white">
            <List>
              {childrens.map((childdata, index) => (
                  <DeskTopMenu
                    key={index}
                    {...childdata}
                    depthLevel={depthLevel}
                    closeNav={onClose}
                  />
              ))}
            </List>
          </PopoverContent>
        </Popover>
      ) : (
        <NavLink href={href} closeNav={closeNav}>
          {label}
        </NavLink>
      )}
    </ListItem>
  );
}
