import { Icon, ButtonGroup, CardFooter } from "@chakra-ui/react";
import { FC, memo } from "react";
import { LinkButton } from "../../../../atoms/utils/LinkButton";
import { AiFillGithub } from "react-icons/ai"
import { WorkCardLink } from "@/components/organisms/layout/index/about/type";

type Props = {
  workCardLink: WorkCardLink
}

export const WorkCardFooter: FC<Props> = memo(function WorkCardFooter(props) {
  const { workCardLink } = props
  return (
    <>
      <CardFooter display={"inline-flex"} justifyContent={"center"}>
        <ButtonGroup spacing='5'>
          {/* <LinkButton url={workCardLink.url} colorScheme="orange" disabled>
            Access
          </LinkButton> */}
          <LinkButton url={workCardLink.github} colorScheme="gray">
            <Icon as={AiFillGithub} />
            Github
          </LinkButton>
        </ButtonGroup>
      </CardFooter>
    </>
  )
})