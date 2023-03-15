import { Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text : string
}

export const MainHeadingText: FC<Props> = memo(function MainHeadingText(props) {
  const {text} = props
  return (
    <>
      <Heading 
        width={"100%"} 
        as={"h1"} 
        fontSize={"34px"} 
        fontWeight={"normal"}
      >
        {text}
      </Heading>
    </>
  )
})