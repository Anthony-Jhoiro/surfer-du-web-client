import Welcome from '../pages/welcome';
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
        </Switch>
    )
}