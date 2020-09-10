import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../styled";
import { EditProfileSchema } from "../validation";
import { updateMember } from "../../redux/actions";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const member = useSelector((state) => state.members.loggedInMember);

    return (
        <Formik
            initialValues={{
                fullname: member.fullname || "",
                email: member.email || "",
                password: "",
                passwordConfirmation: "",
                avatar: "",
            }}
            validationSchema={EditProfileSchema}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                dispatch(updateMember(values, history));
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
                        disabled={true}
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
                    <Button variant="primary" block type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
