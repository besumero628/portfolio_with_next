import { FC, memo } from "react";
import { Paragraph } from "../../utils/Paragraph";
import { TableWithoutHead } from "../../utils/TableWithoutHead";
import { TopicsType } from "./topics/type";

type Props = {
  topics: TopicsType
}

export const Topics: FC<Props> = memo(function Topics(props) {
  const {topics} = props
  return(
    <>
      <Paragraph
        height={{ base: "150px", xl: "150px" }}
        backgroundColor={"#f9f9f9"}
      >
        <TableWithoutHead
          size={"sm"}
          width={{ base: "100%", xl: "1096px" }}
          contents={topics.content}
          elementWidthOption={["10%", "90%"]}
        />
      </Paragraph>
    </>
  )
})