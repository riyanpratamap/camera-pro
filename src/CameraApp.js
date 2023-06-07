import React from 'react';
import { Camera } from 'react-camera-pro';

const CameraApp = () => {
  const handleCameraCapture = (data) => {
    console.log('Image captured:', data);
  };

  return (
    <div>
      <h1>Camera App</h1>
      <Camera
        aspectRatio={[4, 3]}
        onCapture={handleCameraCapture}
      />
    </div>
  );
};

export default CameraApp;
