import logo from './logo.svg';

import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Paths from './routing/paths';

function App() {
  return (
    <div className="App">
      <Router>
        <Paths/>
      </Router>
    </div>
  );
}

export default App;
