import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute({ children, ...rest }) {
    const member = useSelector((state) => state.members.loggedInMember);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                member.isAdmin ? (
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

export default AdminRoute;
