import axios from 'axios';
import { Component } from 'react';
import { AppBox, TextMessege } from './App.styled';
import Serchbar from 'components/Searchbar/Searchbar';
import ImgGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import ErrorMessege from 'components/Error/Error';
import ButtonMore from 'components/Button/Button';

const API_KEY = '34284938-735a9435974ef107b394c89e4';

class App extends Component {
  state = {
    hits: null,
    page: 1,
    request: '',
    loading: false,
    error: false,
    showBtn: true,
    isLoadingBtn: false,
    noPage: true,
  };

  async componentDidUpdate(prevProp, prevState) {
    const prevRequest = prevState.request;
    const nextRequest = this.state.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevRequest !== nextRequest) {
      try {
        this.setState({ loading: true, hits: null, page: 1 });
        const respons = await axios.get(
          `https://pixabay.com/api/?q=${nextRequest}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const responceHits = respons.data.hits;
        const filteredData = responceHits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );

        if (filteredData.length === 0) {
          this.setState({ error: true, noPage: false });
        } else {
          this.setState({
            error: false,
          });
        }
        if (prevRequest) {
          this.setState({ noPage: false });
        }
        this.setState({
          hits: filteredData,
          loading: false,
          loadingMore: false,
          showBtn: true,
          noPage: false,
        });
      } catch (error) {
        console.log(`error`);
      }
    }
    if (prevPage !== nextPage) {
      try {
        if (this.state.page === 1) {
          return;
        }
        this.setState({ loadingMore: true });
        const respons = await axios.get(
          `https://pixabay.com/api/?q=${nextRequest}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const responceHits = respons.data.hits;
        const filteredData = responceHits.map(
          ({ id, largeImageURL, webformatURL, tags }) => ({
            id,
            largeImageURL,
            webformatURL,
            tags,
          })
        );
        const newHits = [...this.state.hits, ...filteredData];

        if (filteredData.length < 12) {
          this.setState({
            hits: newHits,
            showBtn: false,
          });
          return;
        }
        this.setState({
          hits: newHits,
          showBtn: true,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handelSubmitForm = request => {
    this.setState({ request });
  };

  buttonLoad = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  };

  render() {
    const { hits, loading, error, showBtn, request, noPage, isLoadingBtn } =
      this.state;
    return (
      <AppBox>
        <Serchbar onSubmit={this.handelSubmitForm} />
        {loading && <Loader />}
        {noPage && <TextMessege> Please enter category of picture</TextMessege>}
        {error && (
          <ErrorMessege messege="Sorry, nothing was found for your request :(" />
        )}
        <ImgGallery hits={hits} />
        {showBtn && !loading && request !== '' && !error && (
          <ButtonMore onClick={this.buttonLoad}>
            {isLoadingBtn ? 'Loading...' : 'Load More'}
          </ButtonMore>
        )}
      </AppBox>
    );
  }
}

export default App;
