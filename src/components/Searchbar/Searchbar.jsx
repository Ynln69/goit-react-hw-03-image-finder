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
    value: '',
  };

  handelCategotyChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() === '') {
      return Notiflix.Notify.failure('You have entered a category name');
    }

    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };
  render() {
    const { value } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormInput
            onChange={this.handelCategotyChange}
            value={value}
            type="text"
            autocomplete="off"
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <SerchIcon width="30px" height="30px" />
          </SearchFormButton>
        </SearchForm>
      </Header>
    );
  }
}

// Serchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Serchbar;
