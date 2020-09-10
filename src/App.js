import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Home, Login, Register, ForgetPassword } from "./pages";
import { Navbar } from "./components";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/forget-password">
                        <ForgetPassword />
                    </Route>
                    <Route path="*">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
