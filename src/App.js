import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import LandingPage from './pages/landingPage';
import NavbarComp from './components/navbar';
import LoginPage from './pages/loginPage';
import ProductPage from './pages/productPage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  

  render() {
    return (
      <div>
        <NavbarComp />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/products" component={ProductPage} />
        </Switch>
      </div>
    );
  }
}

export default App;