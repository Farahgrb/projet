import React from "react";
import {
    Switch,
    Route,
    Link 
 } from "react-router-dom";
import Men from "./Components/Pages/Men/Men"
import Women from "./Components/Pages/women/Women"

export default function MainRouter() {
    return (
        <Switch>
            <Route exact path="/">
                Home
            </Route>
            <Route exact path="/Women">
                <UsersPage />
            </Route>
            <Route  exact path="/Men">
                <UserPage />
            </Route>
        </Switch>
    )
}