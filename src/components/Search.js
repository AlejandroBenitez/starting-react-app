import './Search.css';
import PropTypes from 'prop-types';

function Search({ onchange }) {
  return (
    <input
      onChange={onchange}
      className="input-box"
      type="text"
      placeholder="Search by name"
    />
  );
}

Search.propTypes = {
  onchange: PropTypes.func.isRequired,
};

export default Search;
