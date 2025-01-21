import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setPreviewImages(files.map(file => URL.createObjectURL(file))); // Preview images locally
    setImages(files); // Store file objects for upload
  };

  const handleUpload = async () => {
    if (images.length === 0) {
      alert('Please select an image to upload!');
      return;
    }

    setUploading(true); // Set uploading state to true

    const formData = new FormData();
    images.forEach((image) => {
      formData.append('image', image);
    });

    try {
      // Replace YOUR_IMGBB_API_KEY with your actual Imgbb API key
      const response = await axios.post('https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Log the response which will contain the uploaded image URL
      console.log('Image uploaded:', response.data.data);

      // You can now store image URLs in your state or database
      const imageUrls = response.data.data.map((img) => img.url);
      console.log('Uploaded image URLs:', imageUrls);

      alert('Images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images:', error);
      
    } finally {
      setUploading(false); // Reset the uploading state
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previewImages.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviewImages(newPreviews);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Images'}
      </button>

      <div className="image-preview-container">
        {previewImages.map((preview, index) => (
          <div key={index}>
            <img src={preview} alt="Preview" width="100" />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;