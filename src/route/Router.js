import React from 'react';
import {Route, Switch} from "react-router-dom";
import User from "../components/user/User";

function Router(){
    return (
        <Switch>
            <Route exact path='/' component={User}/>
        </Switch>
    );
};

export default Router;