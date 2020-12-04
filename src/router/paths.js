import {
  Switch,
  Route
} from "react-router-dom";
import Homepage from '../pages/Homepage';

export default function Paths(){
    return (
        <Switch>
          <Route path="/home">
            <Homepage/>
          </Route>
          <Route path="/spots/:id-name">
            <ConnexionPage/>
          </Route>
          <Route path="/spot/edition">
            <ConnexionPage/>
          </Route>
        </Switch>
    )
}