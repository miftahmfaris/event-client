import React from "react";
import { FormDeposit } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Deposit() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Deposit</h1>
                    <FormDeposit />
                </div>
            </FormCenter>
        </Section>
    );
}
