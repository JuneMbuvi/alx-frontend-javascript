interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Sherrynne",
  lastName: "Joy",
  age: 23,
  location: "Nairobi"
};

const studentTwo: Student = {
  firstName: "Mbesa",
  lastName: "Mbuvi",
  age: 23,
  location: "Machakos"
};

const studentsList: Student[] = [studentOne, studentTwo];

const myTable = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
