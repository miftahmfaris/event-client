import React from "react";
import styled from "styled-components";
import { ListMember, FormSearch, SortMember } from "../components";
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

export default function DashboardMember() {
    return (
        <Section>
            <Container>
                <div>
                    <h1>Member List</h1>
                    <Action>
                        <SectionFilter>
                            <FormSearch service="members" action="GET_MEMBER" />
                            <SortMember service="members" action="GET_MEMBER" />
                        </SectionFilter>
                    </Action>
                    <ListMember />
                </div>
            </Container>
        </Section>
    );
}
