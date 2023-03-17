import NextLink from 'next/link'
import { Box, Divider, Flex, Link } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { Paragraph } from "../../utils/Paragraph";
import { Certification } from "./skills/Certification";
import { SkillList } from "./skills/SkillList";
import { SkillType } from "./skills/type";
import * as gtag from '../../../../lib/gtag'

type Props = {
  skill: SkillType
}

export const Skills: FC<Props> = memo(function Skills(props) {
  const { skill } = props
  const [score, setScore] = useState(0)

  // ボタンをクリックしたとき
  const handler = () => {

    setScore(score + 1)

    // Analyticsに送信する情報
    gtag.event({
      action: 'click_answer', 
      category: 'score',
      label: "experience",
      value: score,
    })
  }
  return(
    <>
      <Paragraph
        id='skills'
        height={{ base: "auto", xl: "70vh" }}
        backgroundColor={"#f9f9f9"}
        justifyContent={"space-around"}
      >
        <Flex 
          width={{base: "100%", xl: 1096}} 
          flexDirection={{base: "column", xl: "row"}} 
          justifyContent={{base: "center", xl: "space-between"}} 
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <SkillList title="FrontEnd" skillItems={skill.skillItemsList.frontEnd} />
          <SkillList title="BackEnd" skillItems={skill.skillItemsList.backEnd} />
          <SkillList title="Other" skillItems={skill.skillItemsList.other} />
        </Flex>
        <Flex 
          width={{base: "100%", xl: 1096}} 
          flexDirection={{base: "column", xl: "row"}} 
          justifyContent={{base: "center", xl: "space-between"}} 
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Divider mb={"5"} />
        </Flex>

        <Certification certificationList={skill.certificationList} />
        
        <Box fontSize={"14px"} m={5}>
          <Link onClick={handler} as={NextLink} href={skill.experienceLink} textDecoration={"underline"}>職務経歴書</Link> はこちら
        </Box>
      </Paragraph>
    </>
  )
})