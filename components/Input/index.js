import { theme } from '../style/Global';

import {
    FormControl,
    FormLabel,
    InputLeftElement,
    FormHelperText,
    Input,
    InputGroup
} from '@chakra-ui/react'

import {
    heightElements,
    radiusElements
} from '../style/Global'

export function InputCustom(props){
    return(
        <FormControl mb="3">
        <FormLabel htmlFor={props.name} color={theme.colors.brand['300']}>{props.label}</FormLabel>
        <InputGroup>
          {/* <InputLeftElement
            height="100%"
            pointerEvents="none"
            children={props.children}
          >{props.children}</InputLeftElement> */}
          <Input
            background={theme.colors.brand['400']}
            border="3px solid"
            height={heightElements}
            border-radius={radiusElements}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            _focus={{
              borderColor: theme.colors.brand['800']
            }} />
        </InputGroup>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    )
}