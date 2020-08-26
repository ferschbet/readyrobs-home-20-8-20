import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Products } from "./Products";
import { Innerproduct } from "./Innerproduct";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { Quickshop } from "./components/Quickshop";
import { MorePopular } from "./components/MorePopular";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Quickshop />
      <MorePopular />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/inner-product" component={Innerproduct} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
