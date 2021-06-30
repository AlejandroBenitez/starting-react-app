import './Tag.css';
import PropTypes from 'prop-types';

function Tag({ tags, showTag }) {
  return (
    <ul className="tags">
      {tags?.map((tag) => (
        <li className="tag">{tag}</li>
      ))}
    </ul>
  );
}

Tag.propTypes = {
  tags: PropTypes.array.isRequired,
  showTag: PropTypes.bool.isRequired,
};

export default Tag;
