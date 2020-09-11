import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ListDepositMember } from "../components";
import { Section, FormCenter, AddButton } from "../components/styled";
import { Button } from "react-bootstrap";

const Container = styled(FormCenter)`
    & > div {
        width: 90%;
    }
`;

export default function DashboardDepositMember() {
    return (
        <Section>
            <Container>
                <div>
                    <h1>Deposit List</h1>
                    <AddButton>
                        <Button variant="primary">
                            <Link to="/add-deposit">Add Deposit</Link>
                        </Button>
                    </AddButton>
                    <ListDepositMember />
                </div>
            </Container>
        </Section>
    );
}
