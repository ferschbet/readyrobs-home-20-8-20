import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
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
import { Sales } from "./components/Sales";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Quickshop />
          <MostPopular />
          <Work />
          <Solutions />
          <Sales />
          <Footer />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/products" component={Products} />
              <Route path="/inner-product" component={Innerproduct} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </main>
    </>
  );
}

export default App;
