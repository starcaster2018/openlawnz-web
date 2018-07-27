import React, { Component } from "react";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { hot } from "react-hot-loader";
import MainNav from "./components/MainNav.jsx";
import Home from "./Home.jsx";
import Search from "./Search.jsx";
import SingleCase from "./SingleCase.jsx";
import Plugins from "./Plugins.jsx";
import Developers from "./Developers.jsx";
import Services from "./Services.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import {
  Container,
  Header,
  Segment,
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "../scss/App.scss";

import Logo from "-!svg-react-loader?name=Logo!../img/openlaw-logo.svg";

class App extends Component {
  render() {
    const MainNavWithRouter = withRouter(props => <MainNav {...props} />);

    return (
      <Router>
        
        <Container>
          <div className="main-header">
          <Header as="h1" icon textAlign="center">
            <Logo
              alt="OpenLaw NZ"
              className="main-logo"
            />
            <Header.Subheader>
              New Zealand case law and legislation metadata platform
            </Header.Subheader>
          </Header>
          </div>

          <MainNavWithRouter />

          <Segment attached="bottom" padded="very">
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/case/:id" component={SingleCase} />
            <Route exact path="/developers" component={Developers} />
            <Route exact path="/Services" component={Services} />
            <Route exact path="/plugin" component={Plugins} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={About} />
          </Segment>
          <footer>
            <p>&copy; 2018 OpenLaw NZ | Sponsored by Harte Law (<Link to="/contact">Contact us</Link> if you'd like to contribute)</p>
          </footer>
        </Container>
        
      </Router>
    );
  }
}

export default hot(module)(App);
