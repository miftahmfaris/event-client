import React from "react";
import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextInput } from "../styled";
import { LoginSchema } from "../validation";
import { memberLogin } from "../../redux/actions";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {
                dispatch(memberLogin(values, history));
            }}
        >
            {() => (
                <Form>
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
                    <Div>
                        <p>
                            <Link to="/register">Register</Link>
                        </p>
                        <p>
                            <Link to="/forget-password">Forget Password?</Link>
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
