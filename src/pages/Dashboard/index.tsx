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
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoginData, useAuth } from '../../contexts/auth';
import requiredField from '../../validations/required';
import logo from '../../assets/logo-default.png';
import loginBg from '../../assets/login-bg.png';
const matriciula = 999 - 999999;
function Dashboard() {
  // const handleClick = () => {

  // }
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = React.useCallback(() => {
    alert('PARABENS VC ACERTOU! RECOLHA SEU PREMIO');
    navigate('/');
  }, []);
  const logout = React.useCallback(() => {
    navigate('login');
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
      <Text noOfLines={4} color={"#F0CA92"}>
         Parabens ilustre Dra. Denise Santana, recolha o seu premio com a diretoria
         ou  
         <Text noOfLines={4} fontWeight={600} color={"#fde408"}>

         <a href="/more" color='#6615f153'>clique AQUI para mais detalhes</a>
         </Text>
        </Text>
        <Button
          display={'flex'}
          alignItems={'center'}
          w={'180px'}
          height={'44px'}
          bg={'#789389'}
          _hover={{ color: '#D0D840' }}
          color={'pink'}
          margin={"20px 0 0 0"}
          fontWeight={'bold'}
          onClick={logout}
        >
          sair
        </Button>
      </Flex>
    </Box>
  );
}
export default Dashboard;
