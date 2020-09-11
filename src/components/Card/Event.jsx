import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = styled.div`
    width: 300px;
    border-radius: 5%;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    margin: 20px;

    & > img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-top-left-radius: 5%;
        border-top-right-radius: 5%;
    }

    & > div {
        padding: 20px;
    }
`;

export default function Event(props) {
    const member = useSelector((state) => state.members.loggedInMember);

    return (
        <Card>
            <img src={props.image} alt="event_image" />
            <div>
                <h5>{props.name}</h5>
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <h6>{props.location}</h6>
                    <h6>Rp. {props.price.toLocaleString()}</h6>
                </div>
                <p style={{ height: "100px" }}>{props.description}</p>
            </div>
            {!member.isAdmin && member.isAdmin !== undefined && (
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                    }}
                >
                    <Link to={`/order/${props.id}`} style={{ width: "100%" }}>
                        <Button variant="primary" block>
                            Order
                        </Button>
                    </Link>
                </div>
            )}
        </Card>
    );
}
