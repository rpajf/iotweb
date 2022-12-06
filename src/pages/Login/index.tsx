import React from "react";
import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Button,
  Image,
  Link,
  FormErrorMessage,
  useToast,
  Container,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginData, useAuth } from "../../contexts/auth";
import requiredField from "../../validations/required";
import logo from '../../assets/logo-default.png'
import loginBg from '../../assets/login-bg.png'

function Login() {
  const toast = useToast();
  const context = useAuth();
  let navigate = useNavigate();

  const handleNav = React.useCallback(()=>navigate('/dashboard'),[])
  //professorx
  //matricula 999-999999
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(async () => {
          const data: LoginData = {
            login: values.login,
            password: values.password,
          };
          await context
            .Login(data)
            .then(() => {
              actions.setSubmitting(false);
              toast({
                title: "Login realizado com sucesso",
                status: "success",
                duration: 3000,
                isClosable: true,
              });
              navigate("/", { replace: true });
            })
            .catch((err) => {
              actions.setSubmitting(false);
              toast({
                title: "Ocorreu um problema no login",
                description: "Verifique os dados informados e tente novamente",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
              console.error(err);
            });
        }, 1500);
      }}
    >
      {(props) => (
        <Flex
          height={"100vh"}
          align={"center"}
          justify={"center"}
          color={"blue.800"}
          bgImage={loginBg}
        >
          <Container  borderRadius={"8"} maxW={"sm"} display={"flex"} flexDirection={"column"} bgColor={"#fff"}>
            <Box marginBottom={"4"}>
              <Image src={logo} mx={"auto"} />
            </Box>

            <Text fontSize={"large"}  align={"center"} fontWeight={"bold"} p={"4"} mb={"4"}>
              Acesso Docente
            </Text>
            <Text fontSize={"small"}  align={"center"} fontWeight={"medium"} p={"4"} mb={"4"}>
              Por favor entre com o seu e-mail instituicional
            </Text>
            <Form>
              <Field name="login" validate={requiredField}>
                {({ field, form }: any) => (
                  <FormControl
                    isRequired
                    marginBottom={"4"}
                    isInvalid={form.errors.login && form.touched.login}
                  >
                    <FormLabel textTransform={"uppercase"} fontWeight={"bold"} htmlFor="login">E-mail</FormLabel>
                    <Input
                      {...field}
                      id="login"
                      placeholder="Informe o login da aplicação"
                    />
                    <FormErrorMessage>{form.errors.login}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password" validate={requiredField}>
                {({ field, form }: any) => (
                  <FormControl
                    isRequired
                    marginBottom={"4"}
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel htmlFor="password" textTransform={"uppercase"} fontWeight={"bold"}>Senha:</FormLabel>
                    <Input
                      {...field}
                      type={"password"}
                      id="senha"
                      placeholder="Informe sua senha de acesso"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button
                type="submit"
                isLoading={props.isSubmitting}
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
                _hover={{opacity:0.8}}  
                mt={"4"}
                padding={"2"}
                bg={"#0c1d2d"}
                color={"#D0D840"}
              >
                Entrar
              </Button>
            </Form>

            <Box mt={"4"} textAlign={"right"} alignSelf="center" >
              <Link fontSize={"sm"}>
                Esqueci minha senha <InfoOutlineIcon />{" "}
              </Link>
            </Box>
            <Button onClick={handleNav} bgColor={"transparent"}>
              test
            </Button>
          </Container>
        </Flex>
      )}
    </Formik>
  );
}
export default Login;
