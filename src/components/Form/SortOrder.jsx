import React from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { SelectInput } from "../styled";
import { sort } from "../../redux/actions";

export default function SortOrder(props) {
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
                        <option value="status-asc">Status A - Z</option>
                        <option value="status-desc">Status Z - A</option>
                        <option value="price-asc">Price Lowest</option>
                        <option value="price-desc">Price Highest</option>
                    </Field>
                </Form>
            )}
        </Formik>
    );
}
