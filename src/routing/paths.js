import Welcome from '../pages/welcome';
import Inscription from '../pages/inscription';
import {
  Switch,
  Route
} from "react-router-dom";

export default function Paths(){
    return (
        <Switch>
          <Route path="/login">
            <Inscription/>
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
    )
}