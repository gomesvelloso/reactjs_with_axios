import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Medico from './components/Medico';
import Especialidade from './components/Especialidade';

import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
ReactDOM.render(
  (
      <Router>
          <App>
              <Switch>
                  <Route exact path="/" component={Especialidade}/>
                  <Route path="/medicos" component={Medico}/>
              </Switch>
          </App>
      </Router>
  ),
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
