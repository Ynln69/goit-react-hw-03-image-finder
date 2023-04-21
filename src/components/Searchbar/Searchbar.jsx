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

  handelCategotyChange = e => {
    this.setState({ request: e.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    e.preventDefault();

    if (this.state.request.trim() === '') {
      return Notiflix.Notify.failure('You have entered a category name');
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };
  render() {
    const { request } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormInput
            onChange={this.handelCategotyChange}
            value={request}
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
