import { FC, memo } from "react";
import { SkillDl } from "@/components/molecules/layout/index/skills/SkillDl";
import { SkillItem } from "./type";

type Props = {
  skillItems: SkillItem[]
}

export const SkillChart: FC<Props> = memo(function SkillChart(props) {
  const { skillItems} = props
  return (
    <>
      {
        skillItems.map((item, index) => {
          return(
            <SkillDl key={index} title={item.name} level={item.level} />
          )
        })
      }
    </>
  )
})