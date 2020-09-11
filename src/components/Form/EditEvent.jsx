import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "../styled";
import { EventSchema } from "../validation";
import { updateEvent, fetchEventById } from "../../redux/actions";
import moment from "moment";

export default function Deposit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const event = useSelector((state) => state.events.eventById);

    useEffect(() => {
        dispatch(fetchEventById(id));
    }, [dispatch, id]);

    return (
        <Formik
            initialValues={{
                name: event.name || "",
                price: event.price || "",
                image: event.image || "",
                startAt: moment(event.startAt).format("YYYY-MM-DD") || "",
                endAt: moment(event.endAt).format("YYYY-MM-DD") || "",
            }}
            validationSchema={EventSchema}
            enableReinitialize={true}
            onSubmit={(values, actions) => {
                dispatch(updateEvent(values, id, history));
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
