import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import NavBar from '../components/NavBar';
import App from '../containers/App'
import NuevoVehiculo from '../containers/NuevoVehiculo'
  
const Router = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/nuevo" component={NuevoVehiculo} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
