/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import MAIN_TITLE from './main-title';
/* eslint-enable */

const title = document.getElementsByTagName('title')[0];
title.innerHTML = MAIN_TITLE;

render(<App />, document.getElementById('app'));
