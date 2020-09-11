import React from "react";
import { FormResetPassword } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function ResetPassword() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Reset Password</h1>
                    <FormResetPassword />
                </div>
            </FormCenter>
        </Section>
    );
}
