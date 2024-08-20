import React, { useRef, useEffect } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera: ', error);
      }
    };

    getCameraStream();
  }, []);

  return (
    <div>
      <h2>Camera Preview</h2>
      <video ref={videoRef} autoPlay style={{ width: '300px', height: '200px' }} />
    </div>
  );
};

export default Camera;
