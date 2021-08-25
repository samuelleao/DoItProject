import Head from 'next/head'
import { FaEnvelope, FaLock } from 'react-icons/fa';

import {
  Flex,
  Image, 
  Grid,
  Text,
  FormControl,
  FormLabel,
  InputLeftElement,
  FormHelperText,
  Input,
  Button,
  InputGroup
} from '@chakra-ui/react'

const heightElements = '60px'
const radiusElements = '8px'

export default function Home(props) {
  return (
    <div>
    <Head>
      <title>Do it</title>
      <meta name="description" content="Do it - O jeito fácil, grátis
      flexível e atrativo de gerenciar seus projetos em uma única plataforma" />
    </Head>
    <Flex 
    height={["100vh", "auto", "100vh", "100vh"]} justifyContent="center"  
    background="brand.800" 
    bgGradient={[
      "linear(to-r, brand.800 65%, #fff 35%)",
      "linear(to-b, brand.800 65%, #fff 35%)",
      "linear(to-r, brand.800 65%, #fff 35%)",
      "linear(to-r, brand.800 65%, #fff 35%)"
    ]} 
    alignItems="center"
    padding={
      [
        "0px",
        "10px 15px",
        "0px",
        "0px"
      ]
    }>
      <Flex width={["60%", "100%", "60%", "60%"]} justifyContent="center" flexDirection={["row", "column", "row", "row"]} alignItems="center">
        <Grid width={["50%", "100%", "50%", "50%"]} paddingRight="100px">
          <Image
            src="images/logo/logo.svg"
            alt=""
            title=""
            boxSize={
              ["150px", "120px", "150px", "150px"]
            }
          />
          <Text color="#fff" fontSize="38px" mb="3" fontWeight="bold">
            O jeito fácil, grátis
          </Text>
          <Text color="#fff" fontSize="16px" mb="5">
            flexível e atrativo de gerenciar seus projetos
            em uma única plataforma
          </Text>
        </Grid>
        <Grid
          width={["40%", "100%", "40%", "40%"]} 
          background="brand.500"
          padding="30px 15px"
          border="3px solid"
          borderColor="brand.400"
        >
          <Text
            fontSize="24px"
            fontWeight="bold"
            mb="4"
          >Bem vindo de volta!
          </Text>
          <FormControl mb="3">
            <FormLabel htmlFor="login" color="brand.300">Login</FormLabel>
            <InputGroup>
              {/* <InputLeftElement
                height="100%"
                pointerEvents="none"
                children={<FaEnvelope color="brand.500" />}
              /> */}
              <Input
                background="brand.400"
                border="3px solid"
                height={heightElements}
                border-radius={radiusElements}
                type="email"
                name="login"
                id="login"
                placeholder="Digite seu login"
                _focus={{
                  borderColor: "brand.900"
                }} />
            </InputGroup>
            <FormHelperText>Ex: camila@julia.com</FormHelperText>
          </FormControl>
          <FormControl mb="3">
            <FormLabel htmlFor="password" color="brand.300">Senha</FormLabel>
            <InputGroup>
              {/* <InputLeftElement
                height="100%"
                pointerEvents="none"
                children={<FaLock color="brand.500" />}
              /> */}
              <Input
                background="brand.400"
                border="3px solid"
                height={heightElements}
                border-radius={radiusElements}
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                _focus={{
                  borderColor: "brand.900"
                }} />
            </InputGroup>

            <FormHelperText></FormHelperText>
          </FormControl>
          <Button
            background="brand.800"
            color="brand.500"
            height={heightElements}
            border-radius={radiusElements}
            _hover={{
              background: "brand.900"
            }}
            _focus={{
              background: "brand.900"
            }}
            mb="4"
          >Entrar</Button>

          <Text textAlign="center" mb="3">Ainda não possui uma conta?</Text>
          <Button
            background="brand.400"
            color="brand.300"
            height={heightElements}
            border-radius={radiusElements}
            _hover={{
              background: "brand.400"
            }}
            _focus={{
              background: "brand.400"
            }}
          >Cadastrar</Button>
        </Grid>
      </Flex>
    </Flex>
    </div>
  )
}
