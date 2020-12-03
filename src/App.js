import logo from './logo.svg';
import './App.css';
import Welcome from './pages/welcome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
