import React from "react";
import { Student } from "../../../../Types";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Box,
} from "@chakra-ui/react";
import api from "../../../../services/api.service";
import Header from "../Header";

interface ClassOfDay {
  id?: number;
  name?: string;
  date_start?: Date;
  date_end?: Date;
  description?: string;
}

const CustomTable: React.FC = () => {
  // const [students, setStudents] = React.useState([]);
  const [data, setData] = React.useState([]);

  // api.get("/events/show/1").then(function (res) {
  //   // console.log(res);
  //   setStudents(res.data.object_response);
  // });

  // api.get("events/users/1").then(function (res) {
  //   console.log(res.data);
  //   // setStudents(res.data.object_response);
  // });
  // const eventData = React.useMemo(() => {
  //   api.get("events/users/1").then(function (res) {
  //     console.log(res.data.object_response);
  //     setData([res.data.object_response]);
  //     // setStudents(res.data.object_response);
  //   });
  // }, [data]);
  React.useEffect(() => {
    api.get("events/users/1").then(function (res) {
      // console.log(res.data.object_response);
      setData(res.data.object_response);
      // setStudents(res.data.object_response);
    });
  }, []);
  console.log(data);
  // const students: Student[] = React.useMemo(() => {

  // }, []);

  return (
    <Table size="md">
      <Thead>
        <Tr>
          <Th>Aluno</Th>
          <Th>Matrícula</Th>
          <Th>Disciplina</Th>
          <Th>Data</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {/* {students?.map(({event_name, user_uid, name,date_ini}) => (
            <React.Fragment>
              <Td>{user_name}</Td>
              <Td>{user_uid}</Td>
              <Td>{name}</Td>
              <Td>{date_ini}</Td>
            </React.Fragment>
          ))} */}
        </Tr>
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default CustomTable;
