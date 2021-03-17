import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Layout from "./components/Layout";
import Knowledges from "./containers/Knowledges";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
        <Switch>
          <Route exact path="/barbosagdev-portfolio" component={Home} />
          <Route path="/barbosagdev-portfolio/about" component={About} />
          <Route path="/barbosagdev-portfolio/knowledges" component={Knowledges} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
