import React from 'react';


function Students(props) {

    let grades = props.grades;
   
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
         Average: A calcular... 
        </div>
      </div>
    );
  }

  export default Students;