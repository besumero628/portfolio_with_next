import { Td } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  width?: string | number
  content: string
}

export const TableElement: FC<Props> = memo(function TableElement(props) {
  const {width, content} = props
  return (
    <>
      <Td width={width? width : ""}>
        {content}
      </Td>
    </>
  )
})