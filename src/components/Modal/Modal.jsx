import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handlePressESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePressESC);
  }

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  handlePressESC = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { largeURL, alt } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeURL} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
