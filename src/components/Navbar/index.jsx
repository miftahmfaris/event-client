import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMember } from "../../redux/actions";
import Admin from "./Admin";
import Guest from "./Guest";
import Member from "./Member";

export default function Navbar() {
    const dispatch = useDispatch();
    const member = useSelector((state) => state.members.loggedInMember);

    useEffect(() => {
        dispatch(fetchMember());
    }, [dispatch]);

    return (
        <div>
            {member.isAdmin === undefined ? (
                <Guest />
            ) : member.isAdmin ? (
                <Admin fullname={member.fullname} />
            ) : (
                <Member fullname={member.fullname} />
            )}
        </div>
    );
}
