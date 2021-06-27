import './Students.css';
import PropTypes from 'prop-types';

function Students({ name, pic, lastName, grades, email, company, skill }) {
  const data = grades.reduce((beforeValue, afterValue) => {
    return Number(beforeValue) + Number(afterValue);
  });
  const result = data / grades.length || 0;
  const average = result.toFixed(3);

  return (
    <div className="UserInfo" id="flex-container">
      <div id="avatar">
        <img className="Avatar" src={pic} alt={name} />
      </div>
      <div id="info">
        <div id="nameTitle">
          <div className="UserInfo-name UserInfo-lastName">
            <b>
              {name} {lastName}
            </b>
          </div>
        </div>
        <div id="data">
          <div className="UserInfo-email">Email: {email}</div>
          <div className="UserInfo-company">Company: {company}</div>
          <div className="UserInfo-skill">Skill: {skill}</div>
          <div className="UserInfo-average">Average: {average}%</div>
        </div>
      </div>
    </div>
  );
}

Students.propTypes = {
  grades: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Students;
