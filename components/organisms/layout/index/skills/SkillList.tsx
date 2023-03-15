import { MdHeader } from "@/components/atoms/utils/MdHeader";
import { Box, Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { SkillChart } from "./SkillChart";
import { SkillItem } from "./type";

type Props = {
  title: string
  skillItems: SkillItem[]
}

export const SkillList: FC<Props> = memo(function SkillList(props) {
  const { title, skillItems } = props
  return (
    <>
      <Flex
        m={"10px"}
        width={{ base: "sm", xl: "30%" }}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box mb={5}>
          <MdHeader>{title}</MdHeader>
        </Box>
        <SkillChart skillItems={skillItems}  />
      </Flex>
    </>
  )
})