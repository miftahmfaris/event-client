import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
    Home,
    Login,
    Register,
    ForgetPassword,
    Profile,
    EditProfile,
    Deposit,
    DashboardDeposit,
} from "./pages";
import { Navbar } from "./components";
import { PrivateRoute, AdminRoute } from "./helpers";

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
                    <PrivateRoute exact path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute exact path="/edit-profile">
                        <EditProfile />
                    </PrivateRoute>
                    <PrivateRoute exact path="/deposit">
                        <Deposit />
                    </PrivateRoute>
                    <AdminRoute exact path="/dashboard-deposit">
                        <DashboardDeposit />
                    </AdminRoute>
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
