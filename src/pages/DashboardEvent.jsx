import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListEvent, FormSearch, SortEvent } from "../components";
import {
    Section,
    FormCenter,
    Action,
    SectionFilter,
    SectionButton,
} from "../components/styled";
import { Button } from "react-bootstrap";

const Container = styled(FormCenter)`
    & > div {
        width: 90%;
    }
`;

export default function DashboardEvent() {
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
                        <SectionButton>
                            <Button variant="primary">
                                <Link to="/event">List Event</Link>
                            </Button>
                            <Button variant="primary">
                                <Link to="/add-event">Add Event</Link>
                            </Button>
                        </SectionButton>
                    </Action>
                    <ListEvent />
                </div>
            </Container>
        </Section>
    );
}
