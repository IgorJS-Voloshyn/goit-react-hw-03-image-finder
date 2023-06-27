import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ matches }) {
  return (
    <ul className={css.imageGallery}>
      {matches.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          alt={tags}
          propID={id}
          url={webformatURL}
          modalURL={largeImageURL}
        />
      ))}
    </ul>
  );
}
