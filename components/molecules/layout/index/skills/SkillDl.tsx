import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { DlElement } from "../../../../atoms/utils/DlElement";
import { SkillFillStar } from "../../../../atoms/utils/SkillFillStar";
import { SkillRegStar } from "../../../../atoms/utils/SkillRegStar";

type Props = {
  title: string
  level: number
}

export const SkillDl: FC<Props> = memo(function SkillDl(props) {
  const { title, level } = props
  const fillstar = Array(level).fill(SkillFillStar)
  const Regstar = Array(5 - level).fill(SkillRegStar)
  const stars = fillstar.concat(Regstar)
  return (
    <>
      <Flex width={"100%"} as="dl" mb={"5"}>
        <Flex width={"40%"} justifyContent={"flex-end"}>
          <DlElement as={"dt"}>{title}</DlElement>
        </Flex>
        <Flex width={"60%"} justifyContent={"center"}>
          <DlElement as={"dd"}>{stars}</DlElement>
        </Flex>
      </Flex>
    </>
  )
})