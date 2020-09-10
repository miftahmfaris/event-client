import React from "react";
import { FormLogin } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Login() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Login</h1>
                    <FormLogin />
                </div>
            </FormCenter>
        </Section>
    );
}
