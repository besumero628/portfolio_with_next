import { TableRow } from "@/components/molecules/utils/TableRow";
import { Table, TableContainer, Tbody } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  size: string
  width: {
    base : string
    xl : string
  }
  contents: Record<string, string>[]
  elementWidthOption?: string[]
}

export const TableWithoutHead: FC<Props> = memo(function TableWithoutHead(props) {
  const {size, width ,contents, elementWidthOption} = props
  return (
    <>
      <TableContainer width={width}>
        <Table size={size}>
          <Tbody>
          {
            contents.map((content, index) => {
              return(
                <>
                  <TableRow
                    key={"topic" + index} 
                    content={content} 
                    elementWidthOption={elementWidthOption} 
                  />
                </>
              )
            })
          }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
})