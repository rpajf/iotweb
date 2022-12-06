
export const sortByAz = (a: any, b: any) => {
  if (a.name > b.name) {
    return 1;
  }
  return -1;
};
export const sortByZa = (a: any, b: any) => {
  if (a.name < b.name) {
    return 1;
  }

  return -1;
};
