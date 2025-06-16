import { Box, Center, Input } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import ButtonComponent from "./ButtonComponent/ButtonComponent";
import { login } from "../services/login";
import { welcomeMessage } from "../services/welcome";

export const Card = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Header />
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <ButtonComponent isClick={login} children="Fazer login" />
        </Center>
      </Box>
      <ButtonComponent
        children="Boas vindas"
        isClick={() => welcomeMessage("Cauan")}
        />
    </Box>
  );
};
