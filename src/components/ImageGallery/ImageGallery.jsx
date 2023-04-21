import PropTypes from 'prop-types';
import ImgGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

const ImgGallery = ({ hits, openModal }) => {
  return (
    <GalleryList>
      {hits &&
        hits.map(hit => (
          <ImgGalleryItem
            key={hit.id}
            webformatURL={hit.webformatURL}
            tags={hit.tags}
            openModal={() => openModal(hit.largeImageURL)}
          />
        ))}
    </GalleryList>
  );
};

ImgGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ),
  // openModal: PropTypes.func.isRequired,
};
export default ImgGallery;
