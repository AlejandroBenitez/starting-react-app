import './TagInput.css';
import PropTypes from 'prop-types';

function TagInput({ addTag, studentEmail }) {
  return (
    <input
      onKeyPress={(event) => addTag(event, studentEmail)}
      className="input-tag-box"
      type="text"
      placeholder="Add a tag"
    />
  );
}

TagInput.propTypes = {
  addTag: PropTypes.func.isRequired,
  studentEmail: PropTypes.string.isRequired,
};

export default TagInput;
