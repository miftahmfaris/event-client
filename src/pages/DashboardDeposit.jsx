import React from "react";
import styled from "styled-components";
import { ListDeposit } from "../components";
import { Section, FormCenter, AddButton } from "../components/styled";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Container = styled(FormCenter)`
    & > div {
        width: 90%;
    }
`;

export default function DashboardDeposit() {
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
                    <ListDeposit />
                </div>
            </Container>
        </Section>
    );
}
