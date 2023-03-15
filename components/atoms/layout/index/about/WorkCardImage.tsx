import { Box, Image } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  src : string
  alt: string
}

export const WorkCardImage: FC<Props> = memo(function WorkCardImage(props) {
  const {src, alt} = props
  return (
    <>
      <Box maxW={"80%"}>
        <Image 
          objectFit={"contain"} 
          width={"100%"} 
          height={"200px"} 
          src={src} 
          alt={alt} 
        />
      </Box>
    </>
  )
})