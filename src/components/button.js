import React, { useState } from "react";
import ReactDOM from "react-dom";

function getData(callback) {
  fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    .then(results => {
        console.log(results)
      return results.json();
    })
    .then(callback);
}

export default function Button {
  const

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data : null
    };
}

handleClick() {
  this.props.getData(data => this.setState({ data }));
}

_renderUsers() {
  return (
    <ol>
        <h4>Name</h4>
      { 
        this.state.data.map(user => <li key={ user.id }>{ user.name}</li>) 
      }
      
    </ol>
  );
}

render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Get All Users</button>
        { this.state.data && this._renderUsers() }
      </div>
    );
  }
}

ReactDOM.render(<Button getData={ getData }/>, document.getElementById("root"));