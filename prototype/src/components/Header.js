import React from 'react'; // eslint-disable-line no-unused-vars
import MAIN_TITLE from '../main-title';

const Header = () => { // eslint-disable-line arrow-body-style
  return (
    <header>
      <div className="row clear pad-top-5 pad-bottom-5 center">
        <div className="col-12">
          <h1>{MAIN_TITLE}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
