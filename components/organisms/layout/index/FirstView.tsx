import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { HeadingBoxwithSubText } from "../../../molecules/utils/HeadingBoxWithSubText";
import { FirstViewType } from "./type";

type Props = {
  firstView: FirstViewType
}

export const FirstView: FC<Props> = memo(function FirstView(props) {
  const { firstView } = props
  return (
    <>
      <Flex
        backgroundImage={firstView.backgroundImage}
        backgroundColor={firstView.backgroundColor}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundBlendMode={"lighten"}
        height={{ base: "100vh", xl: "30vw" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HeadingBoxwithSubText 
          mainText={firstView.mainText} 
          subText={firstView.subText} 
        />
      </Flex>
    </>
  )
})