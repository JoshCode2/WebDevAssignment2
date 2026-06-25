export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  grade: number;
}

export const students: Student[] = [
  {
    id: "S001",
    firstName: "John",
    lastName: "Paul",
    dateOfBirth: new Date("2004-03-18"),
    grade: 92.5,
  },
  {
    id: "S002",
    firstName: "Aisha",
    lastName: "Rahman",
    dateOfBirth: new Date("2003-11-07"),
    grade: 88.2,
  },
  {
    id: "S003",
    firstName: "Ming",
    lastName: "Chen",
    dateOfBirth: new Date("2005-06-29"),
    grade: 95.4,
  },
];