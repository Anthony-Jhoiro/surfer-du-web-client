import {
  Switch,
  Route
} from "react-router-dom";
import Homepage from '../pages/Homepage';
import PostDetail from "../pages/PostDetail";
import PostForm from "../pages/PostForm";

export default function Paths(){
    return (
        <Switch>
          <Route path="/home">
            <Homepage/>
          </Route>
          <Route path="/spots/:id-name">
            <PostDetail/>
          </Route>
          <Route path="/spot/edition">
            <PostForm/>
          </Route>
        </Switch>
    )
}