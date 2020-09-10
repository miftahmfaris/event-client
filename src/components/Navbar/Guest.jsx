import React from "react";
import { Nav, Link } from "../styled";
import { Link as Url } from "react-router-dom";

export default function Guest() {
    return (
        <Nav>
            <div>
                <h1>
                    <Url to="/">Mavents</Url>
                </h1>
            </div>
            <Link>
                <li>
                    <Url to="/event">Event</Url>
                </li>
                <li>
                    <Url to="/login">Login</Url>
                </li>
                <li>
                    <Url to="/register">Register</Url>
                </li>
            </Link>
        </Nav>
    );
}
