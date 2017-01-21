'use strict';

console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

import '../sass/css.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './react/app'

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

