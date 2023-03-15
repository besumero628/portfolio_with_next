import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { TextBox } from "../../../atoms/utils/TextBox";
import { Paragraph } from "../../utils/Paragraph";
import { AboutType } from "./about/type";
import { WorksCard } from "./about/WorksCard";

type Props = {
  about: AboutType
}

export const About: FC<Props> = memo(function About(props) {
  const { about } = props

  return (
    <>
      <Paragraph
        id="about"
        height={{ base: "auto", xl: "auto" }}
        justifyContent={"space-around"}
      >
        <TextBox width={{ base: "100%", xl: "1096px" }}>
          {about.context}
        </TextBox>
        <Flex
          width={{ base: "100%", xl: 1096 }}
          flexDirection={{ base: "column", xl: "row" }}
          justifyContent={{ base: "center", xl: "space-between" }}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {
            about.works.map((work)=>{
              return(
                <>
                  <WorksCard work={work} />
                </>
              ) 
            })
          }
        </Flex>
      </Paragraph>
    </>
  )
})