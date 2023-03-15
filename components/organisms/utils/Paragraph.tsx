import { Flex } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  id?: string
  height: {
    base : string
    xl : string
  }
  backgroundColor? : string
  justifyContent?: string
  children : ReactNode
}

export const Paragraph: FC<Props> = memo(function Paragraph(props) {
  const {id, height ,backgroundColor, justifyContent="center" ,children} = props
  return (
    <>
      <Flex
        id={id}
        height={{base: height.base, xl: height.xl}}
        backgroundColor={backgroundColor}
        flexDirection={"column"}
        justifyContent={justifyContent}
        alignItems={"center"}
        pt={"25px"}
        pb={"25px"}
      >
        {children}
      </Flex>
    </>
  )
})