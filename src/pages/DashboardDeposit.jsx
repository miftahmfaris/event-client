import React from "react";
import styled from "styled-components";
import { ListDeposit } from "../components";
import { Section, FormCenter } from "../components/styled";

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
                    <ListDeposit />
                </div>
            </Container>
        </Section>
    );
}
