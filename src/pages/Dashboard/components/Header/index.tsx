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
  Button,
  Image,
  Link,
  IconButton,
  FormErrorMessage,
  useToast,
  Container,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import Filter from "../Filter";

const Header: React.FC = () => {
  const current = new Date();
  
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const searchOptions: any = [];
  const mappedColourOptions = searchOptions.map((option: any) => ({
    ...option,
    colorScheme: option.value,
  }));
  const [selectValue, setSelectValue] = React.useState<string>('');


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
        <BellIcon />
      </Flex>
      <Text fontSize={"4xl"} fontWeight={"bold"} mt={"-5px"}>
        Início
      </Text>
      <Flex>
        <Input width={"300px"} placeholder="Digite aqui" marginRight={"20px"}></Input>
        {/* <Select placeholder="Filter" width={"120px"} /> */}
        <Filter setValue={setSelectValue}/>
        {/* <InputGroup> */}
        {/* <InputLeftElement
            // className="InputLeft"
            pointerEvents="none"
            
          />
          <Input
            className="Input"
            variant="outline"
            size="xs"
            placeholder={``}
            ch
          /> */}
        {/* </InputGroup> */}
      </Flex>
    </Flex>
  );
};

export default Header;
