import { Heading } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode
}

export const MdHeader: FC<Props> = memo(function MdHeader(props) {
  const { children } = props
  return (
    <>
      <Heading size={"md"}>
        {children}
      </Heading>
    </>
  )
})