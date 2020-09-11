import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextInput } from "../styled";
import { EventSchema } from "../validation";
import { addEvent } from "../../redux/actions";

export default function Deposit() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name: "",
                price: "",
                image: "",
                startAt: "",
                endAt: "",
                location: "",
                description: "",
            }}
            validationSchema={EventSchema}
            onSubmit={(values, actions) => {
                dispatch(addEvent(values, history));
            }}
        >
            {() => (
                <Form>
                    <Field
                        name="name"
                        placeholder="Input your name event here"
                        component={TextInput}
                    />
                    <Field
                        name="description"
                        placeholder="Input your description event here"
                        component={TextInput}
                    />
                    <Field
                        name="location"
                        placeholder="Input your location event here"
                        component={TextInput}
                    />
                    <Field
                        name="price"
                        placeholder="Input your price event here"
                        component={TextInput}
                    />
                    <Field
                        name="image"
                        placeholder="Input your name event here"
                        component={TextInput}
                    />
                    <Field
                        name="startAt"
                        type="date"
                        placeholder="Input your name event here"
                        component={TextInput}
                    />
                    <Field
                        name="endAt"
                        type="date"
                        placeholder="Input your name event here"
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
