import React from "react";
import { FormEditEvent } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function EditEvent() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Edit Event</h1>
                    <FormEditEvent />
                </div>
            </FormCenter>
        </Section>
    );
}
