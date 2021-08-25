import { theme, heightElements, radiusElements } from '../style/Global';

import {
  Button,
} from '@chakra-ui/react'

export function ButtonPrimary(props) {
  return (
    <Button
      background={theme.colors.brand['800']}
      color={theme.colors.brand['500']}
      height={heightElements}
      border-radius={radiusElements}
      _hover={{
        background: theme.colors.brand['900']
      }}
      _focus={{
        background: theme.colors.brand['900']
      }}
      mb="4"
    >
      {props.children}
    </Button>
  )
}

export function ButtonDisable(props) {
  return (
    <Button
      background={theme.colors.brand['400']}
      color={theme.colors.brand['300']}
      height={heightElements}
      border-radius={radiusElements}
      _hover={{
        background: theme.colors.brand['400'] 
      }}
      _focus={{
        background: theme.colors.brand['400'] 
      }}
      mb="4"
    >
      {props.children}
    </Button>
  )
}