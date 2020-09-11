import React from "react";
import { Field, Form, Formik } from "formik";
import { TextInput } from "../styled";
import { Button } from "react-bootstrap";
import { RegisterSchema } from "../validation";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createMember } from "../../redux/actions/members";

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

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
                dispatch(createMember(values, history));
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
