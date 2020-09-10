import React from "react";
import { Field, Form, Formik } from "formik";
import { TextInput } from "../styled";
import { Button } from "react-bootstrap";
import { ForgetPasswordSchema } from "../validation";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function ForgetPassword() {
    return (
        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={ForgetPasswordSchema}
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
                        name="email"
                        placeholder="Input your email here"
                        component={TextInput}
                    />
                    <Div>
                        <p>
                            <Link to="/register">
                                Don't Have Account? Register
                            </Link>
                        </p>
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
