import {Text} from '@chakra-ui/react';
import { theme } from '../style/Global';

export function Heading1(props) {
    return (
        <Text
            color="#fff"
            fontSize="38px"
            mb="3"
            fontWeight="bold">
            {props.children}
        </Text>
    );
}

export function Heading2(props) {
    return (
        <Text
            color={theme.colors.brand['400']}
            fontSize="28px"
            mb="3"
            fontWeight="bold">
            {props.children}
        </Text>
    );
}

export function Heading3(props) {
    return (
        <Text
            color=""
            fontSize="24px"
            mb="3"
            fontWeight="bold">
            {props.children}
        </Text>
    );
}

export function Headline(props) {
    return (
        <Text
            color="#fff"
            fontSize="16px"
            mb="5">
            {props.children}
        </Text>
    );
}