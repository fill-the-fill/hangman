import Letter from "./Letter";
import React, { Component } from "react";

class Score extends Component {
    render() {
        let space = ["_" , "_" , "_" , "_" ]
      return (<div>
          <div>{space.map(m => m)}</div>
          <p>Would you like a hint?</p>
      </div>)
    }
  }

export default Score;
