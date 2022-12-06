import React from "react";
import {
  ArrowForwardIcon,
  InfoOutlineIcon,
  CalendarIcon,
} from "@chakra-ui/icons";

import { MdHome, MdHistory, MdExitToApp, MdPerson } from "react-icons/md";
import {TbBooks} from 'react-icons/tb'
import { LoginData, useAuth } from "../../../../contexts/auth";
import { useLocation, useNavigate } from "react-router-dom";

import sidebarLogo from "../../../../assets/sidebar-logo.png";

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
  Icon,
  FormErrorMessage,
  useToast,
  Container,
} from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  const { Logout } = useAuth();
  const [selected, setSelected] = React.useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate()
  const handleClick = React.useCallback(() => {
    setSelected(true);
    navigate('/')
  }, [selected]);

  const handleClick2 = React.useCallback(() => {
    setSelected(true);
    navigate('/subjects/4')
  }, [selected]);
  
  const pathName = window.location.pathname
  console.log('path', pathName)
  React.useEffect(() => {
    if (location.pathname === "/") {
      setSelected(true);
    }
    // else if(location.pathname === "/subjects/4" || location.pathname ==="/subjects/43"){
    //   setSelected(true);

    // }
    else {
      setSelected(false);
    }
  }, [selected, location.pathname]);

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      bgColor={"#0C1D2D"}
      width={"230px"}
      pt={"10px"}
      height={"2000px"}
      // overflow={"visible"}
      alignSelf={"flex-start"}
      alignItems="start"
    >
      <Box marginBottom={"16px"} alignSelf="center">
        <Image src={sidebarLogo} mx={"auto"} />
      </Box>
      <Button
        display={"flex"}
        alignItems={"center"}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        leftIcon={<Icon as={MdHome} />}
        _active={{
          bg: "transparent",
          borderRadius: "0",
          color: "#D0D840",
          borderLeft: "3px solid #D0D840",
        }}
        color={"#466789"}
        isActive={selected}
        fontWeight={"bold"}
        onClick={handleClick}
      >
        Início
      </Button>
      <Button
        display={"flex"}
        alignItems={"center"}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        leftIcon={<Icon as={MdHistory} />}
        color={"#466789"}
        fontWeight={"bold"}
      >
        Histórico
      </Button>
      <Button
        display={"flex"}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        leftIcon={<Icon as={TbBooks} />}
        alignItems={"center"}
        color={"#466789"}
        fontWeight={"bold"}
      >
        Disciplinas
      </Button>
      <Button
        display={"flex"}
        alignItems={"center"}
        leftIcon={<Icon as={MdPerson}/>}
        color={"#466789"}
        bg={"transparent"}
        _active={{
          bg: "transparent",
          borderRadius: "0",
          color: "#D0D840",
          borderLeft: "3px solid #D0D840",
        }}

        _hover={{ color: "#D0D840" }}
        fontWeight={"bold"}
      >
        Aluno
      </Button>
      <Button
        display={"flex"}
        alignItems={"center"}
        color={"#466789"}
        leftIcon={<Icon as={MdExitToApp}/>}
        bg={"transparent"}
        onClick={Logout}
        
        _hover={{ color: "#D0D840" }}
        fontWeight={"bold"}
      >
        Sair
      </Button>
    </Container>
  );
};

export default Sidebar;
