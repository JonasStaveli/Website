import React from "react";

export class Home extends React.Component {
  render(){
    return(
      <div>
        <p>In a new Component!</p>
        {2 + 2}
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
      </div>
    );
  }
}
