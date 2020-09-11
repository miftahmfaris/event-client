import React from "react";
import styled from "styled-components";
import { ListOrderMember, FormSearch, SortOrder } from "../components";
import {
    Section,
    FormCenter,
    Action,
    SectionFilter,
} from "../components/styled";

const Container = styled(FormCenter)`
    & > div {
        width: 90%;
    }
`;

export default function DashboardOrderMember() {
    return (
        <Section>
            <Container>
                <div>
                    <h1>Order List</h1>
                    <Action>
                        <SectionFilter>
                            <FormSearch service="orders" action="GET_ORDER" />
                            <SortOrder service="orders" action="GET_ORDER" />
                        </SectionFilter>
                    </Action>
                    <ListOrderMember />
                </div>
            </Container>
        </Section>
    );
}
