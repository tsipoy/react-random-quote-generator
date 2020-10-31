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
            <Router>
                <Switch>
                <Route path="/authors/:authorName">
                        <Quotes />
                    </Route>
                    <Route path="/">
                        <RandomQuotes />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}