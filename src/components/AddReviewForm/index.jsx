import React, { useState } from 'react';
import styles from './AddReviewForm.module.css';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';
import { dataURItoBlob } from '../../utils';

function AddReviewForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [region, setRegion] = useState('');
  const [tag, setTag] = useState('');
  const [content, setContent] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!previewImage) {
        alert('Please upload an image before submitting the form.');
        return;
      }
      try {
        const filename = title.replace(/ /g, '_');
        const storageRef = ref(storage, `reviews/${Date.now()}_${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, dataURItoBlob(previewImage));
  
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Error uploading image:', error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          }
        );
      } catch (error) {
        console.error('Error uploading image:', error);
      }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Write a Review</h2>
      <div className={styles.field}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="region">Region:</label>
        <input
          type="text"
          id="region"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="tag">Tag:</label>
        <input type="text" id="tag" value={tag} onChange={(event) => setTag(event.target.value)} />
      </div>
      <div className={styles.field}>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={(event) => setContent(event.target.value)} />
      </div>
      <label htmlFor="image-upload">Image:</label>
      <input
        type="file"
        id="image-upload"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {previewImage && !uploadProgress && (
        <div className={styles.previewImage}>
          <img src={previewImage} alt="Uploaded preview" />
        </div>
      )}
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      <button type="submit" className={styles.button}>
        Save
      </button>
    </form>
  );
}

export default AddReviewForm;
