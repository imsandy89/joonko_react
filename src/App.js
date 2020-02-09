import React, { Component, Fragment } from 'react';
import './App.css';
import CounterComponent from './CounterComponent';

export default class MainComponent extends Component {
  constructor(){
    super();
    this.state = {
      likeCounter: 100,
      dislikeCounter: 25,
      likeFlag: false,
      dislikeFlag: false,
      //count: 0
    }
  }

  likeAction = () => {
    console.log('like');
    if(this.state.likeFlag){
        this.setState({
            likeCounter: this.state.likeCounter - 1,
            likeFlag: !this.state.likeFlag
        });
    }else{
        this.setState({
            likeCounter: this.state.likeCounter + 1,
            likeFlag: !this.state.likeFlag
        });
    }
  }

  dislikeAction = () => {
    console.log('dislike');
    if(this.state.dislikeFlag){
      this.setState({
        dislikeCounter: this.state.dislikeCounter - 1,
        dislikeFlag: !this.state.dislikeFlag
      });
    }else{
      this.setState({
        dislikeCounter: this.state.dislikeCounter + 1,
        dislikeFlag: !this.state.dislikeFlag
      });
    }
  }

  /*counterAction = () => {
    //let count = 0;
    return () => {
      this.setState({count: ++this.state.count});
    }
  }*/

  render() {
    let likes = this.state.likeCounter;
    let dislikes = this.state.dislikeCounter;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Like/Dislike Counter</h2>
        </div>
        <div className="App-intro">
          <button className={`like-button  ${this.state.likeFlag ? 'liked' : ' '}`} onClick={() => this.likeAction()}> Like | 
              <span className="likes-counter">{likes}</span>
          </button>
          <button className={`dislike-button  ${this.state.dislikeFlag ? 'disliked' : ' '}`} onClick={() => this.dislikeAction()}> Dislike | 
              <span className="dislike-counter" >{dislikes}</span>
          </button>
      </div>
      <CounterComponent></CounterComponent>
      
      <style>{`
          .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:   #585858;
            margin: 10px;
          }

          .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
          }
      `}</style>
      </div>
    );
  }
}
