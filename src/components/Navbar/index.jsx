import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMember } from "../../redux/actions";
import Admin from "./Admin";
import Guest from "./Guest";
import Member from "./Member";

export default function Navbar() {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.members.loggedInUser);

    useEffect(() => {
        dispatch(fetchMember());
    }, [dispatch]);

    return (
        <div>
            {loggedInUser.isAdmin === undefined ? (
                <Guest />
            ) : loggedInUser.isAdmin ? (
                <Admin fullname={loggedInUser.fullname} />
            ) : (
                <Member fullname={loggedInUser.fullname} />
            )}
        </div>
    );
}
