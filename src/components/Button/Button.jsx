import PropTypes from 'prop-types';
import { BtnMore } from './Button.styled';

const ButtonMore = ({ buttonLoad }) => {
  return <BtnMore onClick={buttonLoad}>Loard more</BtnMore>;
};

ButtonMore.propTypes = {
  buttonLoad: PropTypes.func.isRequired,
};

export default ButtonMore;
