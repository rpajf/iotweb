import { Student } from "../Types";
export const sortByAz = (a: Student, b: Student) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
};
export const sortByZa = (a: Student, b: Student) => {
  if (a.name < b.name) {
    return 1;
  }

  return -1;
};
