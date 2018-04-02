import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Header2 from './Header2'
import Dog from './Dog';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Header/>, document.getElementById('root'));
ReactDOM.render(<Header2/>, document.getElementById('root'));
ReactDOM.render(<Dog />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

