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
  TableRowProps,
  TableColumnHeaderProps,
} from "@chakra-ui/react";
import api from "../../../../services/api.service";

interface TableComponents {
  thNames?: string[];
  values?: string[];
}

const CustomTable2: React.FC<TableComponents> = ({ thNames, values }) => {
  const [students, setStudents] = React.useState([{}]);
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
          {thNames?.map((item) => (
            <Th>{item}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {values?.length === thNames?.length &&
            values?.map((value) => <Th>{value}</Th>)}
        </Tr>
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default CustomTable2;
