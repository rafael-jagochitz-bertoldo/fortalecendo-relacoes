import { Switch } from "react-router-dom";
import Home from "../pages/home";
import Dashboard from "../pages/Dashboard";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' page={Home} />
      <Route path='/dashboard' page={Dashboard} />
    </Switch>
  );
};

export default Routes;
