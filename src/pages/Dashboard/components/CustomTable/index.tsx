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
import Header from "../Header";

interface ClassOfDay {
  id?: number;
  name?: string;
  date_start?: Date;
  date_end?: Date;
  description?: string;
}
interface Student {
  participant_name?:string,
  event_name?: string,
  data_ini?:string,
  participant_id?:number
}

const CustomTable: React.FC = () => {
  // const [students, setStudents] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [student,setStudent] = React.useState<Student>({})
  const [students, setStudents] = React.useState<Student[]>([]);
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
  // console.log(data);
  React.useEffect(() => {
    if(data){
      data.map(({participant_name,event_name,participant_id}) => {
        const rest = [participant_name,event_name, participant_id]
        // let item = {participant_name,event_name,participant_id}
        console.log(...rest)
        // setStudent(item)
        // setStudents([...rest])
      })
      // data.map((item) => {
      //   // const rest = [participant_name,event_name, participant_id]
      //   // let item = {participant_name,event_name,participant_id}
      //   // setStudent(item)
      //   setStudents([...students,item])
      // })
    }
  },[data]);
  console.log('dados',data)
  // const students: Student[] = React.useMemo(() => {

  // }, []);
  console.log(students)

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
          {students?.map((item, key) => (
            <React.Fragment key={key}>
              <Td>{item.participant_name}</Td>
              <Td>{item.participant_id}</Td>
              <Td>{item.event_name}</Td>
              <Td>{item.data_ini}</Td>
            </React.Fragment>
          ))}
        </Tr>
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
};

export default CustomTable;
