import './App.css';
import { useState, useEffect } from 'react';
import Student from './components/Student';
import Search from './components/Search';
import { searchStudents, buildStudentWithCompleteName } from './studentsUtils';
import { fetchApi } from './api';

function App() {
  const URL_DATA = 'https://api.hatchways.io/assessment/students';

  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [showTag, setShowTag] = useState(false);
  const [filterTag, setFilterTag] = useState('');
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    fetchApi({
      url: URL_DATA,
      onPreFetch: () => {
        setIsLoading(true);
        setHasError(false);
      },
      onSuccess: (dataJson) => {
        setStudents(dataJson.students.map(buildStudentWithCompleteName));
        setIsLoading(false);
      },
      onFail: (error) => {
        setHasError(true);
        setIsLoading(false);
      },
    });
    document.title = 'Robots AB';
  }, []);

  const onChange = (event) => {
    setFilterName(event.target.value);
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

  return (
    <div className="App">
      <div className="main-title">
        <h1>Robots of Alejandro Benitez</h1>
      </div>
      <div className="container-box">
        <Search onchange={onChange} placeholder="Search by name" />{' '}
        <Search onchange={onChangeTag} placeholder="Search by tag" />{' '}
        <div className="data-box">
          {hasError && (
            <p>Something went wrong. We cant load the data. Try again later</p>
          )}
          {isLoading ? (
            <p>Loading ...</p>
          ) : (
            searchStudents({
              students,
              filterName,
              filterTag,
            }).map((student) => {
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
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
