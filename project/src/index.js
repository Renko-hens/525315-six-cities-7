import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockArray } from './mocks';

ReactDOM.render(
  <React.StrictMode>
    <App places={mockArray} />
  </React.StrictMode>,
  document.getElementById('root'));
