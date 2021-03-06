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
    DashboardDepositMember,
    DashboardEvent,
    AddEvent,
    DashboardMember,
    EditEvent,
    Event,
    Order,
    DashboardOrder,
    DashboardOrderMember,
    Activation,
    ResetPassword,
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
                    <PrivateRoute exact path="/add-deposit">
                        <Deposit />
                    </PrivateRoute>
                    <AdminRoute exact path="/dashboard-deposit">
                        <DashboardDeposit />
                    </AdminRoute>
                    <PrivateRoute exact path="/dashboard-deposit/:id">
                        <DashboardDepositMember />
                    </PrivateRoute>
                    <AdminRoute exact path="/dashboard-event">
                        <DashboardEvent />
                    </AdminRoute>
                    <AdminRoute exact path="/add-event">
                        <AddEvent />
                    </AdminRoute>
                    <AdminRoute exact path="/dashboard-member">
                        <DashboardMember />
                    </AdminRoute>
                    <AdminRoute exact path="/profile/:id">
                        <Profile />
                    </AdminRoute>
                    <AdminRoute exact path="/edit-event/:id">
                        <EditEvent />
                    </AdminRoute>
                    <Route exact path="/forget-password">
                        <ForgetPassword />
                    </Route>
                    <Route exact path="/event">
                        <Event />
                    </Route>
                    <PrivateRoute exact path="/order/:id">
                        <Order />
                    </PrivateRoute>
                    <PrivateRoute exact path="/dashboard-order">
                        <DashboardOrder />
                    </PrivateRoute>
                    <PrivateRoute exact path="/dashboard-order/:id">
                        <DashboardOrderMember />
                    </PrivateRoute>
                    <Route exact path="/activation/:id">
                        <Activation />
                    </Route>
                    <Route exact path="/forget-password/:id">
                        <ResetPassword />
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
