import './Student.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Grade from './Grade';
import Tag from './Tag';
import TagInput from './TagInput';

function Student({
  name,
  pic,
  lastName,
  grades,
  email,
  company,
  skill,
  addTag,
  tags,
  showTag,
}) {
  const DECIMAL_AVERAGE = 3;
  const data = grades.reduce((beforeValue, afterValue) => {
    return Number(beforeValue) + Number(afterValue);
  });
  const result = data / grades.length || 0;
  const average = result.toFixed(DECIMAL_AVERAGE);

  const [showList, setShowList] = useState(false);
  const [showButton, setButton] = useState('+');

  const show = () => {
    if (showList) {
      setShowList(false);
      setButton('+');
    } else {
      setShowList(true);
      setButton('-');
    }
  };

  return (
    <div className="UserInfo flex-container">
      <div id="avatar">
        <img className="Avatar" src={pic} alt={name} />
      </div>
      <div className="info-container">
        <div className="nameTitle">
          <div className="UserInfo-name UserInfo-lastName">
            <b>
              {name} {lastName}
            </b>
          </div>
        </div>
        <div className="info">
          <div className="data">
            <div className="UserInfo-email">Email: {email}</div>
            <div className="UserInfo-company">Company: {company}</div>
            <div className="UserInfo-skill">Skill: {skill}</div>
            <div className="UserInfo-average">Average: {average}%</div>
            {showTag && <Tag tags={tags} />}

            <TagInput addTag={addTag} studentEmail={email} />
          </div>
          {showList && <Grade grades={grades} />}
        </div>
      </div>
      <button className="boton-show" type="button" onClick={show}>
        {showButton}
      </button>
    </div>
  );
}
Student.propTypes = {
  grades: PropTypes.array.isRequired,
  showTag: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  addTag: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default Student;
