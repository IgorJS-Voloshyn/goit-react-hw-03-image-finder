import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { propID, url, modalURL, alt } = this.props;
    return (
      <>
        <li key={propID} className={css.imageGalleryItem}>
          <img
            src={url}
            alt={alt}
            className={css.imageGalleryItem_image}
            onClick={this.toggleModal}
          />
        </li>
        {this.state.showModal && (
          <Modal largeURL={modalURL} alt={alt} closeModal={this.toggleModal} />
        )}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  modalURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  propID: PropTypes.number.isRequired,
};
