import { Component } from 'react';
import { fetchPics } from 'components/Api/Api';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { toast } from 'react-toastify';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    matches: [],
    loading: false,
    page: 1,
    query: '',
    showBtn: false,
  };

  constructor() {
    super();
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  async componentDidMount() {
    this.setState({ query: this.props.searchQuery });
  }
  async componentDidUpdate(prevProps, prevState) {
    const { page, query, matches } = this.state;
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.page !== this.state.page
    )
      try {
        this.setState({ query: this.props.searchQuery });
        this.setState({ loading: true });
        const { data } = await fetchPics(page, query);

        if (data.hits.length === 0) {
          return toast('Sorry, pictures not found');
        }

        if (
          (data.total > data.hits.length && data.total - page * 12 >= 0) ||
          matches.length === 0
        ) {
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

  render() {
    const { loading, matches, showBtn } = this.state;

    return (
      <div>
        {loading && <Loader />}
        {matches && (
          <ul className={css.imageGallery}>
            {matches.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                alt={tags}
                propID={id}
                url={webformatURL}
                modalURL={largeImageURL}
              />
            ))}
            {showBtn && <Button onClick={this.buttonHandler} />}
          </ul>
        )}
      </div>
    );
  }
}
