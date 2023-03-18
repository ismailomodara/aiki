import { Button } from '@chakra-ui/react'

enum Type {
  primary = "brand",
  secondary = "gray",
  danger = "red",
  success = "green",
  info = "gray"
}

type AiButton = {
  text: string
  type: Type
  size?: string
  icon?: string
}

export const AiButton = (props: AiButton) => {
  const {
    text,
    type,
    size = 'md'
  } = props;

  return (
    <Button colorScheme={Type[type]} size={size}>{text}</Button>
  )
}
