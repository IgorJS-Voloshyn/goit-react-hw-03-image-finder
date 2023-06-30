import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import css from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { fetchPics } from 'components/Api/Api';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    matches: [],
    loading: false,
    page: 1,
    query: '',
    showBtn: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query, matches } = this.state;

    if (prevState.query !== query || prevState.page !== this.state.page)
      try {
        this.setState({ loading: true });
        const { data } = await fetchPics(page, query);

        if (data.hits.length === 0) {
          return toast('Sorry, pictures not found');
        }

        if (data.total > data.hits.length && data.total - page * 12 >= 0) {
          this.setState({ showBtn: true });
        }

        this.setState({ matches: [...matches, ...data.hits] });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
  }

  buttonHandler() {
    this.setState({ page: this.state.page + 1 });
  }

  handleSubmitForm = data => {
    this.setState({ query: data, matches: [], page: 1, showBtn: false });
  };

  render() {
    const { loading, matches, showBtn } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmitForm}></Searchbar>
        {matches && <ImageGallery matches={matches}></ImageGallery>}
        {loading && <Loader />}
        {showBtn && <Button onClick={this.buttonHandler.bind(this)} />}
        <ToastContainer />
      </div>
    );
  }
}
