import { Select } from "@chakra-ui/react";

import React from "react";
import { sortByAz, sortByZa } from "../../../../utils/sort";
// import { Container } from './styles';

export interface SelectBoxProps {
  element?: HTMLSelectElement;
  value?: string;
  setValue?: (newValue: string) => void;


}
const Filter: React.FC<SelectBoxProps> = () => {
  return (
    <Select placeholder="Filter" width={'120px'}>
      <option value="asc">A-Z</option>
      <option value="desc">Z - A</option>
    </Select>
  );
};

export default Filter;
