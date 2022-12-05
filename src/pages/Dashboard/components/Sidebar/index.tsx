import React from "react";
import {
  ArrowForwardIcon,
  InfoOutlineIcon,
  CalendarIcon,
} from "@chakra-ui/icons";
import {MdHome, MdHistory} from 'react-icons/md'
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
  const [selected, setSelected] = React.useState<boolean>(false)

  const handleClick = React.useCallback(()=> {
    setSelected(true)

  },[selected])

  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      bgColor={"#0C1D2D"}
      width={"230px"}
      pt={"10px"}
      height={"100vh"}
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
        leftIcon={<Icon as={MdHome}/>}
        _active={{
          bg: 'transparent',
          // borderColor: '#bec3c9',
          borderRadius: '0',
          color: '#D0D840',
          borderLeft: '3px solid #D0D840'
        //   _before:{
        //     content: `""`,
        //     position: "absolute",
        //     // width: "3px",
        //     // height: "100%",
        //     borderLeft: '3px solid red',
        //     bg: "#D0D840",
        //     opacity: "0.6",
        // }
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
        // leftIcon={<CalendarIcon />}
        leftIcon={<Icon as={MdHistory}/>}

        color={"#466789"}
        fontWeight={"bold"}
      >
        Histórico
      </Button>
      <Button
        display={"flex"}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        leftIcon={<CalendarIcon />}
        alignItems={"center"}
        color={"#466789"}
        fontWeight={"bold"}
      >
        Disciplinas
      </Button>
      <Button
        display={"flex"}
        alignItems={"center"}
        leftIcon={<CalendarIcon />}
        color={"#466789"}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        fontWeight={"bold"}
      >
        Aluno
      </Button>
      <Button
        display={"flex"}
        alignItems={"center"}
        color={"#466789"}
        leftIcon={<CalendarIcon />}
        bg={"transparent"}
        _hover={{ color: "#D0D840" }}
        fontWeight={"bold"}
      >
        Sair
      </Button>
    </Container>
  );
};

export default Sidebar;
