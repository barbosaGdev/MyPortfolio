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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/knowledges" component={Knowledges} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
