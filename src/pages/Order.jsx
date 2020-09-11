import React from "react";
import { FormOrder } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Deposit() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Order</h1>
                    <FormOrder />
                </div>
            </FormCenter>
        </Section>
    );
}
