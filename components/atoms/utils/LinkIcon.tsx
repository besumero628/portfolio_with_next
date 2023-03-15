import NextLink from 'next/link'
import { Box, Link } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  url: string
  children: ReactNode
}

export const LinkIcon: FC<Props> = memo(function LinkIcon(props) {
  const {url, children} = props
  return (
    <>
      <Box width={"auto"}>
        <Link as={NextLink} href={url}>
          {children}
        </Link>
      </Box>
    </>
  )
})