import React from "react";
import { render } from "react-dom";

import  { Header } from "./components/Header";
import  { Home } from "./components/Home";
import  { Other } from "./components/Other";

class App extends React.Component {

    onGreet() {
      alert("Hello");
    }

    render() {


      return(
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Header/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              {/*<Home greet={this.onGreet}/>*/}
              <Other/>
            </div>
          </div>
        </div>
      );
    }
}

render(<App/>, window.document.getElementById("app"));
