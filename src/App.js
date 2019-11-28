import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import List from "./containers/List";
import Detail from "./components/Detail";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/detail/:path" component={Detail} />
    </Layout>
  );
}

export default App;
