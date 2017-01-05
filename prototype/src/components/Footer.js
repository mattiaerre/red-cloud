import React from 'react'; // eslint-disable-line no-unused-vars
import MAIN_TITLE from '../main-title';

const Footer = () => { // eslint-disable-line arrow-body-style
  return (
    <footer>
      <div className="row clear pad-top-5 pad-bottom-5 center">
        <div className="col-12 text-center">
          <small>{MAIN_TITLE}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
