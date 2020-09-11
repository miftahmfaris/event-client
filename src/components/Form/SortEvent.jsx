import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SelectInput } from "../styled";
import { sort } from "../../redux/actions";

export default function SortEvent(props) {
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
                        <option value="price-asc">Price Low - High</option>
                        <option value="price-desc">Price High - Low</option>
                        <option value="startAt-asc">Closer Event</option>
                        <option value="endAt-desc">Longest Expired</option>
                    </Field>
                </Form>
            )}
        </Formik>
    );
}
