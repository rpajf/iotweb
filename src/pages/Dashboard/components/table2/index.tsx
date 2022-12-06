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
import Sidebar from "../../components/Sidebar";
import {useParams} from 'react-router-dom'

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

const CustomTable2: React.FC = () => {

  // const [students, setStudents] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [student, setStudent] = React.useState<Student>({});
  const [students, setStudents] = React.useState<Student[]>([]);

  const storagedUser = localStorage.getItem("@App:user");

  console.log("user", storagedUser);
  const params = useParams()
  console.log('params',params)
  const profId = storagedUser && JSON.parse(storagedUser);
  // api.get("")
  React.useEffect(() => {
    //ADICIONAR ID DO PROF
    // api.get(`events/user/${profId?.id}`).then(function (res) {
    api.get(`events/users/${params.id}`).then(function (res) {
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
    <Flex height={"100vh"} color={"blue.800"}>
      <Sidebar />
      {/* <CustomTable />  */}
      <Flex direction={"column"} px={"40px"} width={"full"}>
        {/* <Sidebar /> */}

        <Header />

        <Table size="md" marginTop={"20px"}>
          <Thead>
            <Tr>
              <Th>Aluno</Th>
              <Th>Disciplina</Th>
              <Th>Data inicio</Th>
              <Th>Data fim</Th>
              <Th>Status</Th>

            </Tr>
          </Thead>
          <Tbody>
            {/* <Tr> */}
            {/* {students?.map((item, key) => (
            <React.Fragment key={key}>
              <Td>{item.participant_name}</Td>
              <Td>{item.participant_id}</Td>
              <Td>{item.event_name}</Td>
              <Td>{item.data_ini}</Td>
            </React.Fragment>
          ))} */}
            {data?.map(({ participant_name, event_name, entry_date, exit_date, presence_status }, index) => (
                <Tr key={index}>
                <Td>{participant_name}</Td>
                <Td>{event_name}</Td>
                <Td>{exit_date}</Td>
                <Td>{entry_date}</Td>
                <Td>{presence_status}</Td>
                </Tr>
          ))}

            {/* {data?.map(({ name, date_end, date_ini, subject_name }, index) => (
              <Tr key={index}>
                <Td>{name}</Td>
                <Td>{subject_name}</Td>
                <Td>{date_ini}</Td>
                <Td>{date_end}</Td>
              </Tr>
            ))} */}
            {/* </Tr> */}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </Flex>
    </Flex>
  );
};

export default CustomTable2;
