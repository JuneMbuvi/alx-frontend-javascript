interface Teacher {
  readonly fisrtName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  readonly numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${teacher[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

class StudentClass implements Student {
  constructor({ firstName, lastName }: constructorStudentClass) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }
  displayName(): string {
    return this.firstName;
  }
}

interface constructorStudentClass {
  firstName: string;
  lastName: string;
}

interface Student {
  workOnHomework(): string;
  displayName(): string;
}
