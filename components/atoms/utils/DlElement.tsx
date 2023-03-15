import { Td, Text } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  as : any
  children: ReactNode
}

export const DlElement: FC<Props> = memo(function DlElement(props) {
  const {as, children} = props
  return (
    <>
      <Text as={as} >{children}</Text>
    </>
  )
})