export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((student) => student.location === city);
  // next, map through the students to get their grades
  const updatedStudents = filteredStudents.map(student => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return updatedStudents;
}
