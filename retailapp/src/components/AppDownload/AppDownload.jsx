import React from 'react';
import "./AppDownload.css";  

const AppDownload = () => {
    return (
      <div className="app-download" id="app-download">
        <p>For a better experience, download <br /> 
          <strong>SmARTmART</strong>
        </p>
        <div className="app-download-platforms">
          <img src="/imgg/playstore.png" alt="Download on Play Store" />
          <img src="/imgg/appstore.png" alt="Download on App Store" />
        </div>
      </div>
    );
};

export default AppDownload;
