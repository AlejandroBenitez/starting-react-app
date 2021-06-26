import './App.css';
import React, { useState, useEffect } from 'react';
import Students from './components/Students';


function App() {
  const url = 'https://api.hatchways.io/assessment/students';
  const [students, setStudents] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);    
    const responseJSON = await response.json();
    const data = responseJSON.students;    
    setStudents(data);    
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className="App">

         { !students ? 'Cargando...' :
          students.map( (student, index)=>{
            return <Students name={student.firstName} lastName={student.lastName} pic={student.pic} email={student.email} company={student.company} skill={student.skill} average={student.average} />
          })
         }
      
    </div>
  );
}

export default App;
