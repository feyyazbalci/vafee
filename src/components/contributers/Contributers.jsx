import React from 'react';
import './Contributers.css';

const Contributers = () => {
  return (
    <div name="contributer" className="contributer">
      <div className="container">
        <div className="top">
          <h1>Who will contribute to this project?</h1>
        </div>
        <div className="bottom">
          <div className="scope-one">
            <ul>
              <a href="https://github.com/XenonsCM">
                <li>Volkan Peker ~ 201811051</li>
              </a>
              <a href="https://github.com/edK4137">
                <li>Emre Deniz Kanbur ~ 201811038</li>
              </a>
              <a href="https://github.com/feyyazbalci">
                <li>Feyyaz Balcı ~ 201811010</li>
              </a>
              <a href="https://github.com/estnml">
                <li>Esat Mustafa Namlı ~ 201911041</li>
              </a>
              <a href="https://github.com/beginnerjo">
                <li>Ali Karatepe ~ 201811040</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributers;
