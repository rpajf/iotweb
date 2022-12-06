import React from "react";

import {
  ArrowForwardIcon,
  InfoOutlineIcon,
  CalendarIcon,
  BellIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Text,
  Input,
  Divider,
  Icon,
  Link,
  IconButton,
  FormErrorMessage,
  useToast,
  Container,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { MdPeople } from "react-icons/md";

import api from "../../../../services/api.service";

import Filter from "../Filter";

const Header: React.FC = () => {
  const current = new Date();
  const [professorName, setProfessorName] = React.useState("");

  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const searchOptions: any = [];

  React.useEffect(() => {
    api.get("events/users/1").then(function (res) {
      // console.log(res.data.object_response);
      setProfessorName(res.data.object_response[0].event_owner_name);
      // setStudents(res.data.object_response);
    });
  }, []);

  const [selectValue, setSelectValue] = React.useState<string>("");
  const userData = React.useMemo(() => {}, []);

  return (
    <Flex direction={"column"} height={"300px"} justifyContent={"space-evenly"}>
      <Flex
        alignItems={"center"}
        // width={"100%"}
        justifyContent={"space-between"}
        marginTop={"-10px"}
      >
        <Text fontSize={"xl"} fontWeight={"bold"}>
          São Luís, {date}
        </Text>
        <Flex
          alignItems={"center"}
          width="340px"
          h="50px"
          justifyContent={"space-evenly"}
        >
          <BellIcon marginRight={"15px"}/>
          <Divider orientation='vertical' />
          <Text fontWeight={"bold"} maxW={"150px"} fontSize={"14px"}>
            {professorName}
          </Text>
          <Box
            w={"50px"}
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            h={"50px"}
            borderRadius={"50%"}
            borderColor="#0C1D2D"
            borderWidth={"1px"}
          >
            <Icon as={MdPeople} w={8} h={8} />
          </Box>
        </Flex>
      </Flex>
      <Text fontSize={"4xl"} fontWeight={"bold"} mt={"-5px"}>
        Início
      </Text>
      <Flex>
        <Input
          width={"300px"}
          placeholder="Digite aqui"
          marginRight={"20px"}
        ></Input>
        {/* <Select placeholder="Filter" width={"120px"} /> */}
        <Filter setValue={setSelectValue} />
      </Flex>
    </Flex>
  );
};

export default Header;
