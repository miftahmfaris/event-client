import React from "react";
import { FormRegister } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Register() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Register</h1>
                    <FormRegister />
                </div>
            </FormCenter>
        </Section>
    );
}
