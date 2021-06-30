import './App.css';
import { useState, useEffect } from 'react';
import Student from './components/Student';
import Search from './components/Search';

function App() {
  const url = 'https://api.hatchways.io/assessment/students';

  const [filter, setFilter] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [students, setStudents] = useState([]);
  const [showTag, setShowTag] = useState(false);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    const data = responseJSON.students;
    setStudents(data);
  };

  const onChange = (event) => {
    setFilter(event.target.value);
  };
  const onChangeTag = (event) => {
    setFilterTag(event.target.value);
  };

  const addTag = (event, studentEmail) => {
    if (event.key === 'Enter') {
      const studentIndex = students.findIndex(
        (st) => st.email === studentEmail
      );
      const studentsCopy = [...students];
      studentsCopy[studentIndex].tags = studentsCopy[studentIndex].tags
        ? [...studentsCopy[studentIndex].tags, event.target.value]
        : [event.target.value];
      setStudents(studentsCopy);
      setShowTag(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <div className="container-box">
        <Search onchange={onChange} placeholder="Search by name" tag="0" />{' '}
        <Search onchange={onChangeTag} placeholder="Search by tag" tag="1" />{' '}
        <div className="data-box">
          {!students
            ? 'Cargando...'
            : students
                .filter(
                  (student) =>
                    student.firstName
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    student.lastName
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .filter((student) =>
                  filterTag
                    ? student.tags?.some((tag) => tag.includes(filterTag))
                    : student
                )

                .map((student) => {
                  return (
                    <Student
                      name={student.firstName}
                      lastName={student.lastName}
                      pic={student.pic}
                      email={student.email}
                      company={student.company}
                      skill={student.skill}
                      grades={student.grades}
                      addTag={addTag}
                      tags={student.tags}
                      showTag={showTag}
                      key={student.email}
                    />
                  );
                })}
        </div>
      </div>
    </div>
  );
}

export default App;
