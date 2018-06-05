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
import PercentageApp from './PercentageApp'
import Header3 from "./Header3";
import registerServiceWorker from './registerServiceWorker';
import Index2 from './Index2';
import Index3 from './Index3';
import AutoFocusInput from './AutoFocusInput';
//import Post from './Post';
import BlackBorderContainer from './BlackBorderContainer';
import Editor from './Editor';
import getDefaultStyledPost from './getDefaultStyledPost';
import Index4 from './Index4';

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
//ReactDOM.render(<Entry />, document.getElementById('root'))
//ReactDOM.render(<PercentageApp />, document.getElementById('root'))
//ReactDOM.render(<Header3 />, document.getElementById('root'))
ReactDOM.render(<Index2 />, document.getElementById('root'))
//ReactDOM.render(<Index3 />, document.getElementById('root'))
//ReactDOM.render(<AutoFocusInput />, document.getElementById('root'))
//ReactDOM.render(<Post content='123' />, document.getElementById('root'))
// ReactDOM.render(
//     <BlackBorderContainer>
//         <div className='name'>My Name：Lucy</div>
//         <p className='age'>
//             My Age：<span>12</span>
//         </p>
//     </BlackBorderContainer>, 
//     document.getElementById('root'))
//ReactDOM.render(<Editor />, document.getElementById('root'))
//const Post = getDefaultStyledPost({ color: 'red' })
//ReactDOM.render(<Post style={{ color: 'blue', fontSize: '13px' }} />, document.getElementById('root'))
//ReactDOM.render(<Post style={{ fontSize: '12px' }} />, document.getElementById('root'))

ReactDOM.render(<Index4 />, document.getElementById('root'))
//ReactDOM.render(<div>{ users.map((user, i) => <UserList key={i} user={user} />) }</div>, document.getElementById('root'))
registerServiceWorker();

