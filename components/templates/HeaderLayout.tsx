import { Container } from "@chakra-ui/react";
import { FC, memo } from "react";
import { Header } from "../organisms/layout/common/Header";

export const HeaderLayout: FC = memo(function HeaderLayout() {
  return(
    <>
      <Header />
    </>
  )
})