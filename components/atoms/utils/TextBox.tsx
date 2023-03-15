import { Box, Text } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  width?: Record<string, any>
  fontSize?: string
  children : ReactNode
}

export const TextBox: FC<Props> = memo(function TextBox(props) {
  const {width={base: "100%"}, fontSize="14px", children} = props
  return (
    <>
      <Box width={width}>
        <Text fontSize={fontSize}>
          {children}
        </Text>
      </Box>
    </>
  )
})