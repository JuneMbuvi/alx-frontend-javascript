export default function getStudentIdsSum(students) {
  const sumOfStudents = students.reduce((sum, student) => sum + student.id, 0);
  return sumOfStudents;
}
