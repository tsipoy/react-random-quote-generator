import React from "react";
import RandomQuotes from "./RandomQuotes";
import Quotes from "./QuotesDetails";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export default function App() {
    return (
        <div>
            <h1>Random quotes generator</h1>
            <Router>
                <Switch>
                    <Route path="/authors/:authorName">
                        <RandomQuotes />
                    </Route>
                    <Route path="/authors/:authorName">
                        <Quotes />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}