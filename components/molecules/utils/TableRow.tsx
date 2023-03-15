import { TableElement } from "@/components/atoms/utils/TableElement";
import { Tr } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  content: Record<string, string>
  elementWidthOption?: string[]
}

export const TableRow: FC<Props> = memo(function TableRow(props) {
  const {content, elementWidthOption} = props
  const keys = Object.keys(content)
  return (
    <>
      <Tr>
        {
          keys.map((key, index) => {
            return(
              <>
                <TableElement
                  key={index}
                  width={ elementWidthOption? elementWidthOption[index] : ""} 
                  content={content[key]} 
                />
              </>
            )
          })
        }
      </Tr>
    </>
  )
})