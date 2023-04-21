import PropTypes from 'prop-types';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

const ImgGalleryItem = ({ id, webformatURL, tags, openModal }) => {
  return (
    <GalleryItem key={id} onClick={openModal}>
      <GalleryImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImgGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string.isRequired,
  // openModal: PropTypes.func.isRequired,
};

export default ImgGalleryItem;
