import React from 'react';


function Students(props) {

    const grades = props.grades;
    const data = grades.reduce(function(valorAnterior, valorActual){
      return Number(valorAnterior) + Number(valorActual);
    });
    const result = (data / grades.length) || 0;
    const average = result.toFixed(3);
   
    return (
        <div className="UserInfo">
        <img className="Avatar"
        src={props.pic}
        alt={props.name}
      />
        <div className="UserInfo-name UserInfo-lastName">
          <b>{props.name} {props.lastName} </b>
        </div>
        <div className="UserInfo-email">
         Email: {props.email} 
        </div>
        <div className="UserInfo-company">
         Company: {props.company} 
        </div>
        <div className="UserInfo-skill">
         Skill: {props.skill} 
        </div>
        <div className="UserInfo-average">
         Average: {average}%
        </div>
      </div>
    );
  }

  export default Students;