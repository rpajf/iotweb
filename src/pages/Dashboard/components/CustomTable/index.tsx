import React from "react";

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
import { useAuth } from "../../../../contexts/auth";
import Header from "../Header";
import {Link} from 'react-router-dom'

interface ClassOfDay {
  id?: number;
  name?: string;
  date_start?: Date;
  date_end?: Date;
  description?: string;
}
interface Student {
  participant_name?: string;
  event_name?: string;
  data_ini?: string;
  participant_id?: number;
}

const CustomTable: React.FC = () => {
  const { user } = useAuth();
  const memoizedUser = React.useMemo(() => {
    return user;
  }, []);

  // const [students, setStudents] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [student, setStudent] = React.useState<Student>({});
  const [students, setStudents] = React.useState<Student[]>([]);

  const storagedUser = localStorage.getItem("@App:user");

  console.log("user", storagedUser);

  const profId = storagedUser && JSON.parse(storagedUser);
  // api.get("")
  React.useEffect(() => {
    //ADICIONAR ID DO PROF
    api.get(`events/user/${profId?.id}`).then(function (res) {
      // api.get(`events/users/19`).then(function (res) {

      // console.log(res.data.object_response);
      setData(res.data.object_response);
      // setStudents(res.data.object_response);
    });
  }, []);
  console.log(data);
  // React.useEffect(() => {
  //   if (data) {
  //     data.map(({ participant_name, event_name, participant_id }) => {
  //       const rest = [participant_name, event_name, participant_id];
  //       // let item = {participant_name,event_name,participant_id}
  //       // console.log(...rest)
  //       // setStudent(item)
  //       // setStudents([...rest])
  //     });
  //   }
  // }, [data]);
  // console.log('dados',data)
  // const students: Student[] = React.useMemo(() => {

  // }, []);

  return (
    <Table size="md">
      <Thead>
        <Tr>
          <Th>Aula</Th>
          <Th>Disciplina</Th>
          <Th>Data inicio</Th>
          <Th>Data fim</Th>
          {/* <Th>Id</Th> */}
        </Tr>
      </Thead>
      <Tbody>


        {data?.map(({ name, date_end, date_ini, subject_name, id }, index) => (
          <Tr key={index}>
            <Td><Link to={`/subjects/${id}`}>{name}</Link></Td>
            <Td>{subject_name}</Td>
            <Td>{date_ini}</Td>
            <Td>{date_end}</Td>

          </Tr>
        ))}
        {/* </Tr> */}
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default CustomTable;
