export default function getStudentsByLocation(studentlist, city) {
  return studentlist.filter((obj) => obj.location === city);
}
