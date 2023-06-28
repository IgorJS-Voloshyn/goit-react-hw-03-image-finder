import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export function ImageGallery({ matches }) {
  return (
    <ul className={css.imageGallery}>
      {matches.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className={css.imageGalleryItem} key={id}>
          <ImageGalleryItem
            alt={tags}
            url={webformatURL}
            modalURL={largeImageURL}
          />
        </li>
      ))}
    </ul>
  );
}
