import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const token = localStorage.getItem("token");
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token !== "undefined" && token !== null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
