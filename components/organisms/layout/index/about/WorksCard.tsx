import { WorkCardBody } from "@/components/molecules/layout/index/about/WorkCardBody";
import { WorkCardFooter } from "@/components/molecules/layout/index/about/WorkCardFooter";
import { Card, Divider } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Work } from "./type";

type Props = {
  work: Work
}

export const WorksCard: FC<Props> = memo(function WorksCard(props) {
  const { work } = props
  return (
    <>
      <Card width={{ base: "sm", xl: "30%" }} m={"10px"}>
        <a href={work.links.url} target={"_blank"} rel={"noopener noreferrer"}>
          <WorkCardBody element={work.body} />
          <Divider />
        </a>
        <WorkCardFooter workCardLink={work.links} />
      </Card>
    </>
  )
})