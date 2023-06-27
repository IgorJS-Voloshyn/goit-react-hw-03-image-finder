import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    query: '',
  };

  handleSubmitForm = data => {
    this.setState({ query: data });
  };

  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmitForm}></Searchbar>
        <ImageGallery searchQuery={this.state.query}></ImageGallery>

        <ToastContainer />
      </div>
    );
  }
}
