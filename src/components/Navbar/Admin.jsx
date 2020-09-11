import React from "react";
import { Link as Url, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Link, Name } from "../styled";
import { logout } from "../../redux/actions";

export default function Admin(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Nav>
            <div>
                <h1>
                    <Url to="/">Mavents</Url>
                </h1>
            </div>
            <Link>
                <li>
                    <Url to="/profile">
                        <Name>Hallo, {props.fullname}</Name>
                    </Url>
                </li>
                <li>
                    <Url to="/dashboard-member">Member</Url>
                </li>
                <li>
                    <Url to="/dashboard-event">Event</Url>
                </li>
                <li>
                    <Url to="/dashboard-deposit">Deposit</Url>
                </li>
                <li>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(logout(history))}
                    >
                        Logout
                    </span>
                </li>
            </Link>
        </Nav>
    );
}
