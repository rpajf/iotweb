import React from 'react';
import { ArrowForwardIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { useLocation } from 'react-router-dom';
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
  Avatar,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginData, useAuth } from '../../contexts/auth';
import requiredField from '../../validations/required';
import logo from '../../assets/logo-default.png';
import loginBg from '../../assets/login-bg.png';
const matriciula = 999 - 999999;
function Final() {
  // const handleClick = () => {

  // }
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = React.useCallback(() => {
    alert('PARABENS VC ACERTOU! RECOLHA SEU PREMIO');
    navigate('/');
  }, []);
  const logout = React.useCallback(() => {
    navigate('/login');
  }, []);
  return (
    <Box
      bgColor="#6967C6"
      w="100%"
      h="100vh"
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex direction={'column'} w={'300px'} h={'250px'}>
        <Text noOfLines={4} color={'#F0CA92'}>
          um jantar no outback(ainda não fui e tem aquela sensação de estar
          viajando por ser um lugar novo) ou um restaurante da sua escolha
        </Text>
        <Avatar icon={<>😄</>} />
        <Button
          display={'flex'}
          alignItems={'center'}
          w={'180px'}
          height={'44px'}
          bg={'#789389'}
          _hover={{ color: '#D0D840' }}
          color={'pink'}
          margin={'20px 0 0 0'}
          fontWeight={'bold'}
          onClick={logout}
        >
          sair
        </Button>
      </Flex>
    </Box>
  );
}
export default Final;
