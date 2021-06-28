import './Search.css';
import PropTypes from 'prop-types';

function Search({ onchange, placeholder }) {
  return (
    <input
      onChange={onchange}
      className="input-box"
      type="text"
      placeholder={placeholder}
    />
  );
}

Search.propTypes = {
  onchange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
