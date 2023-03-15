import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  src : string
  alt: string
}

export const CertificationInfo: FC<Props> = memo(function CertificationInfo(props) {
  const { src, alt } = props
  return (
    <>
    <Flex>
      <Image boxSize={"10"} src={src} alt={alt} />
      <Flex width={"350px"} alignItems={"center"} justifyContent={"center"}>
        <Text fontSize={"14px"}>
          {alt}
        </Text>
      </Flex>
    </Flex>
    </>
  )
})