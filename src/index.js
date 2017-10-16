import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import BaseLayout from './components/BaseLayout'


ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Route path='/' component={App} />
    </BaseLayout>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
