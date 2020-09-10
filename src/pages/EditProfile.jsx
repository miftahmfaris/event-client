import React from "react";
import { FormEditProfile } from "../components";
import { Section, FormCenter } from "../components/styled";

export default function EditProfile() {
    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Edit Profile</h1>
                    <FormEditProfile />
                </div>
            </FormCenter>
        </Section>
    );
}
