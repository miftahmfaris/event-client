import React from "react";
import { Field, Form, Formik } from "formik";
import { TextInput } from "../styled";
import { Button } from "react-bootstrap";
import { ResetPasswordSchema } from "../validation";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/actions/members";

const Div = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export default function Register() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                password: "",
                passwordConfirmation: "",
            }}
            validationSchema={ResetPasswordSchema}
            onSubmit={(values, actions) => {
                dispatch(resetPassword(values, id, history));
            }}
        >
            {() => (
                <Form>
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
