import { CardBody, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MdHeader } from "../../../../atoms/utils/MdHeader";
import { TextBox } from "../../../../atoms/utils/TextBox";
import { WorkCardImage } from "../../../../atoms/layout/index/about/WorkCardImage";
import { WorkCardElement } from "@/components/organisms/layout/index/about/type";

type Props = {
  element: WorkCardElement
}

export const WorkCardBody: FC<Props> = memo(function WorkCardBody(props) {
  const { element } = props
  return (
    <>
      <CardBody>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <WorkCardImage src={element.image.src} alt={element.image.alt} />
          <Stack mt='6' spacing='3'>
            <MdHeader>{element.title}</MdHeader>
            <TextBox>
              {element.context}
            </TextBox>
          </Stack>
        </Flex>

      </CardBody>
    </>
  )
})