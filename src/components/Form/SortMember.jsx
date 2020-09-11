import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SelectInput } from "../styled";
import { sort } from "../../redux/actions";

export default function SortMember(props) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                by: "",
            }}
        >
            {({ values }) => (
                <Form>
                    <Field
                        name="by"
                        component={SelectInput}
                        onClick={() => {
                            dispatch(
                                sort(values.by, props.service, props.action)
                            );
                        }}
                    >
                        <option value="createdAt-desc">Sort</option>
                        <option value="fullname-asc">Name A - Z</option>
                        <option value="fullname-desc">Name Z - A</option>
                        <option value="balance-asc">Balance Lowest</option>
                        <option value="balance-desc">Balance Highest</option>
                    </Field>
                </Form>
            )}
        </Formik>
    );
}
