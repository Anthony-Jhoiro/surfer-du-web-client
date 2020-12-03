import Welcome from '../pages/welcome';
import Inscription from '../pages/Inscription';
import {
  Switch,
  Route
} from "react-router-dom";

export default function Paths(){
    return (
        <Switch>
          <Route path="/">
            <Welcome/>
          </Route>
          <Route path="/login">
            <Inscription/>
          </Route>
        </Switch>
    )
}