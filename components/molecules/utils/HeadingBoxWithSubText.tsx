import { Box } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MainHeadingText } from "../../atoms/utils/MainHeadingText";
import { SubTextWithHeading } from "../../atoms/utils/SubTextAroundHeading";

type Props = {
  mainText : string
  subText : string
}

export const HeadingBoxwithSubText: FC<Props> = memo(function HeadingBoxwithSubText(props) {
  const {mainText, subText} = props
  return (
    <>
        <Box>
          <MainHeadingText text={mainText} />
          <SubTextWithHeading text={subText} />
        </Box>
    </>
  )
})