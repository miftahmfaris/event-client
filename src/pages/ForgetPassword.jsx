import React from "react";
import { FormForgetPassword } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function Register() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Reset Password</h1>
                    <FormForgetPassword />
                </div>
            </FormCenter>
        </Section>
    );
}
