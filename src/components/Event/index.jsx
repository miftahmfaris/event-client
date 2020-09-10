import React from "react";
import styled from "styled-components";
import { Section } from "../styled";

const ListCard = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Event() {
    return (
        <Section>
            <div>
                <h2>Event List</h2>
                <ListCard></ListCard>
            </div>
        </Section>
    );
}
