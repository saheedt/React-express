import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.js';

require('./css/style.css');


//render root componnt to page.
ReactDOM.render(<Root />, window.document.getElementById('app'));