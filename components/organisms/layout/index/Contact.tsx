import { LinkIcon } from "@/components/atoms/utils/LinkIcon";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { FC, memo } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiOutlineMail } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { Paragraph } from "../../utils/Paragraph";
import { ContactType } from "./contact/type";

type Props = {
  contact: ContactType
}

export const Contact: FC<Props> = memo(function FirstView(props) {
  const { contact } = props
  return (
    <>
    <Paragraph
      id="contact"
      height={{ base: "auto", xl: "auto" }}
      justifyContent={"space-around"}
    >
      <Flex
        width={{base: "100%", xl: 1096}} 
        justifyContent={"space-around"}
        mt={10}
        mb={10}
      >
        <Box width={"auto"}>
          <a href={"mailto:" + contact.mail}>
            <Icon boxSize={"70px"} as={AiOutlineMail} color={"gray.400"} />
          </a>
        </Box>
        <LinkIcon url={contact.links.github}>
          <Icon boxSize={"70px"} as={AiFillGithub} color={"gray.400"} />
        </LinkIcon>
        <LinkIcon url={contact.links.twitter}>
          <Icon boxSize={"70px"} as={AiFillTwitterCircle} color={"gray.400"} />
        </LinkIcon>
        <LinkIcon url={contact.links.linkedIn}>
          <Icon boxSize={"70px"} as={AiFillLinkedin} color={"gray.400"} />
        </LinkIcon>
        <LinkIcon url={contact.links.qiita}>
          <Icon boxSize={"70px"} as={SiQiita} color={"gray.400"} />
        </LinkIcon>
      </Flex>
    </Paragraph>
    </>
  )
})