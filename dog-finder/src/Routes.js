import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/dogs">
                <DogList />
            </Route>
            <Route exact path="/dogs/:name">
                <DogDetails />
            </Route>
            <Redirect to="/dogs" />

        </Switch>
    )
}

export default Routes;

