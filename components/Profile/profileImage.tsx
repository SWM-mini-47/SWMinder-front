import React, { useState } from 'react';

type Props = {
  currentImage: string; // URL of the current profile image
  onImageChange: (image: File) => void; // Callback function when the image is changed
};

const ProfileImage: React.FC<Props> = ({ currentImage, onImageChange }) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(currentImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  return (
    <div className="user_image">
      <label htmlFor="profile-image">
        <img src={imagePreview} alt="Profile" className="image" />
      </label>
      <input
        id="profile-image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ProfileImage;
