import './Grade.css';
import PropTypes from 'prop-types';

function Grade({ grades }) {
  const studentGrades = grades.map((grade) => (
    <li>
      Test {grades.indexOf(grade) + 1}: {grade}%
    </li>
  ));
  return <ul className="scores">{studentGrades}</ul>;
}

Grade.propTypes = {
  grades: PropTypes.array.isRequired,
};

export default Grade;
