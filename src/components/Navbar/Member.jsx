import React from "react";
import { Link as Url, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Link, Name } from "../styled";
import { logout } from "../../redux/actions";

export default function Member(props) {
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
