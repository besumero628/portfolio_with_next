import { CertificationInfo } from "@/components/molecules/layout/index/skills/CertificationInfo";
import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { CertificationItem } from "./type";

type Props = {
  certificationList: CertificationItem[]
}

export const Certification: FC<Props> = memo(function Certification(props) {
  const { certificationList } = props
  return (
    <>
      <Flex 
          width={{base: "100%", xl: 1096}} 
          flexDirection={{base: "column", xl: "row"}} 
          justifyContent={{base: "center", xl: "space-around"}} 
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          {
            certificationList.map((content, index)=> {
              return(
                <>
                  <CertificationInfo key={index} src={content.src} alt={content.alt} />
                </>
              )
            })
          }
        </Flex>
    </>
  )
})