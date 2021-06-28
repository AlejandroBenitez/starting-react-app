import './App.css';
import { useState, useEffect } from 'react';
import Student from './components/Student';
import Search from './components/Search';
import Tag from './components/Tag';

function App() {
  const url = 'https://api.hatchways.io/assessment/students';

  const [filter, setFilter] = useState('');
  const [students, setStudents] = useState([]);

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
    setFilter(event.target.value);
  };

  const addTag = (event, studentEmail) => {
    if (event.key === 'Enter') {
      console.log(studentEmail);
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
                      .includes(filter.toLowerCase()) ||
                    student.tag.toLowerCase().includes(filter.toLowerCase())
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
