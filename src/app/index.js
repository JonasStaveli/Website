import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import  { Root } from "./components/Root";
import  { Home } from "./components/Home";
import  { Other } from "./components/Other";



class App extends React.Component {

    render() {
      return(
        <Router>
          <div>
            <Root>
              <Route exact path="/" component={Home} />
              <Route path={"home"} component={Home} />
              <Route path={"other"} component={Other} />
            </Root>
          </div>
        </Router>
      );
    }
}

render(<App />, window.document.getElementById('app'));
