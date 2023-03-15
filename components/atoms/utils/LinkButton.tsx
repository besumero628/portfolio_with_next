import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  url: string
  colorScheme: string
  children: ReactNode
  disabled?: boolean
}

export const LinkButton: FC<Props> = memo(function LinkButton(props) {
  const {url, colorScheme, children, disabled=false} = props
  return (
    <>
    {
      disabled
        ? <Button 
            variant={'solid'} 
            colorScheme={colorScheme} 
            isDisabled={disabled}
            size={"sm"}
          >
            {children}
          </Button>
        : <Button 
            as={"a"} 
            href={url} 
            variant={'solid'} 
            colorScheme={colorScheme} 
            isDisabled={disabled}
            size={"sm"}
          >
            {children}
          </Button>
    }
    </>
  )
})