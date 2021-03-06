import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let post = {
    title: "Dinosaurs are awesome",
    authors: [
        "Stealthy Stegosaurus",
        "Tiny T-Rex",
        "Ivory Iguanodon"
    ],
    body: "Check out this body property!",
    comments: [
        "First!", 
        "Great post", 
        "Hire this author now!"
    ]
}

ReactDOM.render(<Post title={post.title} allAuthors={post.authors} body={post.body} comments={post.comments} />, document.getElementById('root'));
registerServiceWorker();