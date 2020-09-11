import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { TextInput } from "../styled";
import { search } from "../../redux/actions";

export default function Deposit(props) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                q: "",
            }}
        >
            {({ values }) => (
                <Form>
                    <Field
                        name="q"
                        placeholder="Search here"
                        component={TextInput}
                        onKeyUp={() => {
                            dispatch(
                                search(values.q, props.service, props.action)
                            );
                        }}
                    />
                </Form>
            )}
        </Formik>
    );
}
