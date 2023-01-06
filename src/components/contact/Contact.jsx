import React from 'react';
import './ContactStyles.css';

const Contact = () => {
  return (
    <div name="contact" className="contact">
      <div className="container">
        <div className="top">
          <h1>References</h1>
        </div>

        <div className="bottom">
          <div className="scope-one">
            <ul>
              <a href="https://github.com/CankayaUniversity/ceng-407-408-2022-2023-VAFEE-Communication-and-Information-System/wiki/Literature-Review">
                <li>Literature Review</li>
              </a>
              <a href="https://github.com/CankayaUniversity/ceng-407-408-2022-2023-VAFEE-Communication-and-Information-System/wiki/Software-Design-Description-(SDD)">
                <li>Software Design Description (SDD)</li>
              </a>
              <a href="https://github.com/CankayaUniversity/ceng-407-408-2022-2023-VAFEE-Communication-and-Information-System/wiki/Software-Requirement--Specification-(SRS)">
                <li>Software Requirement Specification (SRS)</li>
              </a>
              <a href="https://docs.google.com/spreadsheets/d/15wcFZF6CW_VpTpYKueRtR6QdrfGKv15NDdiOK7VvtOA/edit#gid=0">
                <li>Project Work Plan</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
