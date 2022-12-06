import React from "react";
import Header from "../Header";
import CustomTable from "../CustomTable";
import CustomTable2 from "../table2";
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

const Main: React.FC = () => {
  return (
    <Flex
      direction={"column"}
      px={"40px"}
      width={"full"}
    >
      <Header/>
      <CustomTable />
    </Flex>
  );
};

export default Main;
