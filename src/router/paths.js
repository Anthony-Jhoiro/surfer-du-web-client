import Welcome from '../pages/welcome';
import Inscription from '../pages/inscription';
import {
  Switch,
  Route
} from "react-router-dom";
import ConnexionPage from '../pages/connexion';

export default function Paths(){
    return (
        <Switch>
          <Route path="/signin">
            <Inscription/>
          </Route>
          <Route path="/login">
            <ConnexionPage/>
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
    )
}