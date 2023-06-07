import React from 'react';
import Camera from 'react-camera-pro';

function App() {
  return (
    <div>
      <h1>Camera App</h1>
      <Camera
        front={false}
        width="100%"
        height="auto"
        onTakePhoto={dataUri => {
          // Handle the captured photo data here
          console.log(dataUri);
        }}
      />
    </div>
  );
}

export default App;
