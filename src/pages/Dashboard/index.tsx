import React from "react";
import Sidebar from "./components/Sidebar";
import CustomTable from "./components/CustomTable";
import Main from "./components/Main";
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

const Dashboard: React.FC = () => {
  return (
    <Flex  height={"100vh"}  color={"blue.800"}>
       <Sidebar />
      {/* <CustomTable />  */}
      <Main/>
    </Flex>
  );
};

export default Dashboard;
