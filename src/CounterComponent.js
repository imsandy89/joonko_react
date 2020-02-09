import React, { Fragment } from 'react';

export default class CounterComponent extends React.Component {
    constructor(){
        super();
        this.state = {
          count: 0
        }
      }

    handleCounterClick = () => {
        console.log("Counter called ");
        this.setState({count: ++this.state.count});
        /*return () => {
            this.setState({count: ++this.state.count});
        }*/
    }

    render = () => {
        return (
            <React.Fragment>
                <button className="Submit" onClick={() => this.handleCounterClick()}>Counter</button>
                <span>{this.state.count}</span>
            </React.Fragment>
        );
    }
}