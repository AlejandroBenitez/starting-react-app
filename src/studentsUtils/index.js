export const searchStudents = ({ students, filterName, filterTag }) => {
  return students
    .filter((student) => {
      return (
        student.firstName.toLowerCase().includes(filterName.toLowerCase()) ||
        student.lastName.toLowerCase().includes(filterName.toLowerCase())
      );
    })
    .filter((student) =>
      filterTag ? student.tags?.some((tag) => tag.includes(filterTag)) : student
    );
};
