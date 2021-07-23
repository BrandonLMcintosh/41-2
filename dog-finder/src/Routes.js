import React from "react";
import {Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Home from "./Home";

const Routes = ({dogs}) => {

    const getDog = (name) => {
        for(let dog of dogs){
            if (dog.name === name) return dog
        }
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dogs">
                    <DogList dogs={dogs}/>
                </Route>
                <Route exact path="/dogs/:name">
                    <DogDetails getDog={getDog}/>
                </Route>
            <Redirect to="/dogs" />
        </Switch></BrowserRouter>
        
    )
}

export default Routes;

