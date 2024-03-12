export default function getStudentIdsSum(studentlist) {
  return studentlist.reduce((counter, student) => counter + student.id, 0);
}
