import React from "react";
import { Field, Form, Formik } from "formik";
import { TextInput } from "../styled";
import { Button } from "react-bootstrap";
import { RegisterSchema } from "../validation";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Register() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                fullname: "",
                passwordConfirmation: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {() => (
                <Form>
                    <Field
                        name="fullname"
                        placeholder="Input your name here"
                        component={TextInput}
                    />
                    <Field
                        name="email"
                        placeholder="Input your email here"
                        component={TextInput}
                    />
                    <Field
                        name="password"
                        type="password"
                        placeholder="Input your password here"
                        component={TextInput}
                    />
                    <Field
                        name="passwordConfirmation"
                        type="password"
                        placeholder="Re-input password here"
                        component={TextInput}
                    />
                    <Div>
                        <p>
                            <Link to="/login">Have Account? Login</Link>
                        </p>
                    </Div>
                    <Button variant="primary" block type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
