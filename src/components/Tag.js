import './Tag.css';
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

function Tag({ name }) {
  return <Chip label={name} />;
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Tag;
