import './App.css';
import { useState, useEffect } from 'react';
import Students from './components/Students';

function App() {
  const url = 'https://api.hatchways.io/assessment/students';
  const [students, setStudents] = useState();
  const [filter, setFilter] = useState('');
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    const data = responseJSON.students;
    setStudents(data);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const onChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className="App">
      <div className="container-box">
        <input
          onChange={onChange}
          className="input-box"
          type="text"
          placeholder="Search by name"
        />{' '}
        {!students
          ? 'Cargando...'
          : students
              .filter(
                (student) =>
                  student.firstName
                    .toLowerCase()
                    .includes(filter.toLowerCase()) ||
                  student.lastName.toLowerCase().includes(filter.toLowerCase())
              )
              .map((student) => {
                return (
                  <Students
                    name={student.firstName}
                    lastName={student.lastName}
                    pic={student.pic}
                    email={student.email}
                    company={student.company}
                    skill={student.skill}
                    grades={student.grades}
                    key={student.email}
                  />
                );
              })}
      </div>
    </div>
  );
}

export default App;
