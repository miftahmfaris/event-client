import React, { useEffect } from "react";
import styled from "styled-components";
import { Section } from "../styled";
import Card from "../Card/Event";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ListCard = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export default function Event() {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.events.allEvent);

    useEffect(() => {
        dispatch(fetchEvent());
    }, [dispatch]);

    return (
        <Section>
            <div>
                <h2 style={{ textAlign: "center", margin: "20px 0" }}>
                    Event Terbaru
                </h2>
                <ListCard>
                    {event.length > 0 &&
                        event.slice(0, 3).map((item) => {
                            return (
                                <Card
                                    key={item._id}
                                    location={item.location}
                                    name={item.name}
                                    image={item.image}
                                    id={item._id}
                                    description={item.description}
                                    price={item.price}
                                />
                            );
                        })}
                </ListCard>
                <ListCard style={{ margin: "20px 0" }}>
                    <Link to="/event">
                        <Button variant="primary">More</Button>
                    </Link>
                </ListCard>
            </div>
        </Section>
    );
}
