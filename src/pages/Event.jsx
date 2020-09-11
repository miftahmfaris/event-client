import React, { useEffect } from "react";
import styled from "styled-components";
import { CardEvent, FormSearch, SortEvent } from "../components";
import { useSelector, useDispatch } from "react-redux";
import {
    Section,
    FormCenter,
    Action,
    SectionFilter,
} from "../components/styled";
import { fetchEvent } from "../redux/actions";

const Container = styled(FormCenter)`
    & > div {
        width: 90%;
    }
`;

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
            <Container>
                <div>
                    <h1>Event List</h1>
                    <Action>
                        <SectionFilter>
                            <FormSearch service="events" action="GET_EVENT" />
                            <SortEvent service="events" action="GET_EVENT" />
                        </SectionFilter>
                    </Action>
                    <ListCard>
                        {event.length > 0 &&
                            event.map((item) => {
                                return (
                                    <CardEvent
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
                </div>
            </Container>
        </Section>
    );
}
