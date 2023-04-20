// import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Serchbar = ({ onSubmit }) => {
  return (
    <Header>
      <SearchForm>
        <SearchFormButton type="submit">
          <img src="./images/loupe.png" alt="" />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

// Serchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Serchbar;
