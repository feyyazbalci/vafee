import React from 'react';
import './OptionsStyles.css';

const Options = () => {
  return (
    <div name="options" className="options">
      <div className="container">
        <div className="top">
          <h1>What can users do in the system?</h1>
        </div>
        <div className="bottom">
          <div className="scope-one">
            <h3>
              Users can make video chat, audio chat, video and audio meetings,
              messaging, e-mailing, file sharing, creating groups, creating
              purpose-oriented pages in these groups and preparing a
              user-specific calendar. Thanks to our application that will work
              as a cross-platform, users will be informed instantly from their
              fixed and mobile devices.
            </h3>
            <h6 className="scope-two">
              (With the cross-platform operation of these tools, communication
              will be provided quickly and instantly, and students and educators
              will be provided with mobility by providing convenience.)
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
