import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Work } from "./components/Work";
import { Innerproduct } from "./Innerproduct";
import { Jumbotron } from "./components/Jumbotron";
import { Layout } from "./components/Layout";
import { MostPopular } from "./components/MostPopular";
import { NavigationBar } from "./components/NavigationBar";
import { NoMatch } from "./NoMatch";
import { Products } from "./Products";
import { Quickshop } from "./components/Quickshop";
import { Solutions } from "./components/Solutions";
import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Quickshop />
      <MostPopular />
      <Work />
      <Solutions />
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
