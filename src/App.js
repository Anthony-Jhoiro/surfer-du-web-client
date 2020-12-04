import logo from './logo.svg';

import './App.css';
import Header from "./components/header";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Paths from './router/paths';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Paths/>
      </Router>
    </div>
  );
}

export default App;
