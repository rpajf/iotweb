export interface Student {
  name: string;
  email?: string;
  document?: string;
}

export interface Class {
  id?: number;
  name?: string;
  students?: Student[];
}
