import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import Header2 from './Header2'
import Dog from './Dog';
import LikeButton from './LikeButton'
import Dog2 from './Dog2'
import UserList from './UserList';
import Entry from './Entry'
import registerServiceWorker from './registerServiceWorker';

const users = [
    {name: 'wade', age: 18, sex: 'male'},
    {name: 'rose', age: 19, sex: 'male'},
    {name: 'jame', age: 20, sex: 'female'}
]


//ReactDOM.render(<Header/>, document.getElementById('root'));
//ReactDOM.render(<Header2/>, document.getElementById('root'));
//ReactDOM.render(<Dog />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<LikeButton/>, document.getElementById('root'))
//ReactDOM.render(<Dog2/>, document.getElementById('root'))
//ReactDOM.render(<LikeButton likedText="已赞" unLikeText="赞" />, document.getElementById('root'))
//ReactDOM.render(<UserList />, document.getElementById('root'))
ReactDOM.render(<Entry />, document.getElementById('root'))
//ReactDOM.render(<div>{ users.map((user, i) => <UserList key={i} user={user} />) }</div>, document.getElementById('root'))
registerServiceWorker();

