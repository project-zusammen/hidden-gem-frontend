import { useDropzone } from 'react-dropzone';
import styles from './ImageDropzone.module.css';
import PropTypes from 'prop-types';

const ImageDropzone = ({ onImageDrop, previewImage }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'], 
      'image/jpeg': ['.jpg', '.jpeg'] 
    },
    onClick: (event) => event.stopPropagation(),
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => onImageDrop(e.target.result);
      reader.readAsDataURL(file);
    },
  });
  
  return (
    <div {...getRootProps({ className: styles.dropzone })} onClick={(e) => e.stopPropagation()}>
      <input {...getInputProps()} />
      {previewImage ? (
        <p>Image uploaded!</p>
      ) : (
        <p>Drag and drop images here, or click to select</p>
      )}
    </div>
  );
};
  
  
ImageDropzone.propTypes = {
  onImageDrop: PropTypes.func.isRequired,
  previewImage: PropTypes.string,
};

export default ImageDropzone;