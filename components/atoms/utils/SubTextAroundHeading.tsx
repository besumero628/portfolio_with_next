import { Flex, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text : string
}

export const SubTextWithHeading: FC<Props> = memo(function SubTextWithHeading(props) {
  const {text} = props
  return (
    <>
      <Flex justifyContent={"center"}>
        <Text color={"#aaaaaa"}>{text}</Text>
      </Flex>
    </>
  )
})