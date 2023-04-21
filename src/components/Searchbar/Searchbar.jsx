// import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as SerchIcon } from './../../images/search.svg';
import { Component } from 'react';
import Notiflix from 'notiflix';

class Serchbar extends Component {
  state = {
    request: '',
  };

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
