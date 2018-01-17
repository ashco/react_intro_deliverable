import React, { Component } from 'react';
import './App.css';


class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1>Guess what? {this.props.title}</h1>
        <Author authors={this.props.allAuthors}/>
        <h3>{this.props.body}</h3>
        <h4>Comments:</h4>
        {this.props.comments.map(comment => <li> {comment} </li>)}
      </div>
    );
  }
}

class Author extends Component {
  render() {
    return (
      <div className="Author">
        {this.props.authors.map(authors => <p> By: {authors} </p>)}
      </div>
    );
  }
}

export default Post;
