import Head from 'next/head';
import { theme } from '../components/style/Global';

import { 
  FaEnvelope, 
  FaLock } 
from 'react-icons/fa';

import { InputCustom } from '../components/Input/index';
import { ButtonPrimary, ButtonDisable } from '../components/Button/index';

import {
  Flex,
  Image,
  Grid,
  Text,
} from '@chakra-ui/react';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Do it</title>
        <meta name="description" content="Do it - O jeito fácil, grátis
      flexível e atrativo de gerenciar seus projetos em uma única plataforma" />
      </Head>
      <Flex
        height={["auto", "auto", "100vh", "100vh"]} justifyContent="center"
        background="brand.800"
        bgGradient={[
          "linear(to-b, brand.800 65%, #fff 35%)",
          "linear(to-b, brand.800 65%, #fff 35%)",
          "linear(to-r, brand.800 65%, #fff 35%)",
          "linear(to-r, brand.800 65%, #fff 35%)"
        ]}
        alignItems="center"
        padding={
          [
            "10px 15px",
            "10px 15px",
            "0px",
            "0px"
          ]
        }>
        <Flex width={["100%", "100%", "90%", "70%"]} justifyContent="center" flexDirection={["column", "column", "row", "row"]} alignItems="center">
          <Grid width={["100%", "100%", "50%", "50%"]} paddingRight="100px">
            <Image
              src="images/logo/logo.svg"
              alt=""
              title=""
              boxSize={
                ["120px", "120px", "150px", "150px"]
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
            width={["100%", "100%", "40%", "40%"]}
            background='brand.500'
            padding="30px 15px"
            border="3px solid"
            borderColor={theme.colors.brand['400']}
          >
            <Text
              fontSize="24px"
              fontWeight="bold"
              mb="4"
            >Bem vindo de volta!
            </Text>
            <InputCustom 
            icon={<FaEnvelope color="brand.500" />} 
            helperText="Ex: camila@julia.com" 
            placeholder="Digite seu login" 
            label="Login"
            type="email" 
            name="login"
            id="login"
            />
             <InputCustom 
            icon={<FaLock color="brand.500" />} 
            helperText="" 
            placeholder="Digite sua senha" 
            label="Senha"
            type="password" 
            name="password"
            id="password"
            />
            <ButtonPrimary>Entrar</ButtonPrimary>
            <Text textAlign="center" mb="3">Ainda não possui uma conta?</Text>
            <ButtonDisable>Cadastrar</ButtonDisable>
          </Grid>
        </Flex>
      </Flex>
    </div>
  )
}
