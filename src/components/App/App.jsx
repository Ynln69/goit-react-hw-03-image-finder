import { Component } from 'react';
import { AppBox } from './App.styled';
import Serchbar from 'components/Searchbar/Searchbar';

class App extends Component {
  render() {
    return (
      <AppBox>
        <Serchbar />
      </AppBox>
    );
  }
}

export default App;
