import React, { useState, useEffect } from 'react';
import './styles/loadingscreen.css'; // Import your custom CSS file

const LoadingScreen = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, props.period);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='loading-container'>
      {loading ? (
        <div className="loading-screen align-items-center justify-content-center vh-100">
          <div className="custom-spinner spinner1"></div>
          <div className="custom-spinner spinner2"></div>
          <div className='custom-spinner spinner3'></div>
        </div>
      ) : <></>}
    </div>
  );
};

export default LoadingScreen;
