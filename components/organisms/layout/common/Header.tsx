import NextLink from 'next/link'
import { Center, Flex, Link, Icon, List, ListItem } from "@chakra-ui/react";
import { FC, memo } from "react";
import { BsDiamondFill } from "react-icons/bs";

export const Header: FC = memo(function Header() {
  return (
    <>
      <Flex
        as={"header"}
        align="center"
        justify={"space-between"}
        ml={{ base: "auto", md: 100 }}
        mr={{ base: "auto", md: 100 }}
        padding={{ base: 3, md: 5 }}
      >
        <Flex>
          <Center h={'50px'} color="black">
            <Icon as={BsDiamondFill} />
          </Center>
        </Flex>
        <List spacing={3}>
          <ListItem display="inline" m={2} fontSize={16}>
            <a href='#about'>ABOUT</a>
          </ListItem>
          <ListItem display="inline" m={2} fontSize={16}>
            <a href='#skills'>SKILLS</a>
          </ListItem>
          <ListItem display="inline" m={2} fontSize={16}>
            <a href='#contact'>CONTACT</a>
          </ListItem>
        </List>
      </Flex>
    </>
  )
})