import React from "react";
import { FormEvent } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Deposit() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Add Event</h1>
                    <FormEvent />
                </div>
            </FormCenter>
        </Section>
    );
}
