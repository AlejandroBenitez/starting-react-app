import './Tag.css';
import PropTypes from 'prop-types';

function Tag({ addTag, studentEmail }) {
  return (
    <input
      onKeyPress={(event) => addTag(event, studentEmail)}
      className="input-tag-box"
      type="text"
      placeholder="Add a tag"
    />
  );
}

Tag.propTypes = {
  addTag: PropTypes.func.isRequired,
  studentEmail: PropTypes.string.isRequired,
};

export default Tag;
