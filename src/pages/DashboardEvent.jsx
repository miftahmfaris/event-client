import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListEvent } from "../components";
import { Section, FormCenter, AddButton } from "../components/styled";
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
                    <AddButton>
                        <Button variant="primary">
                            <Link to="/add-event">Add Event</Link>
                        </Button>
                    </AddButton>
                    <ListEvent />
                </div>
            </Container>
        </Section>
    );
}
