export const searchStudents = ({ students, filterName, filterTag }) => {
  return students
    .filter((student) => {
      return student.completeName
        .toLowerCase()
        .includes(filterName.toLowerCase());
    })
    .filter((student) =>
      filterTag ? student.tags?.some((tag) => tag.includes(filterTag)) : student
    );
};

export const buildStudentWithCompleteName = (student) => {
  const studentClone = { ...student };
  studentClone.completeName = `${student.firstName} ${student.lastName}`;
  return studentClone;
};
