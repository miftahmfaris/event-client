import React, { useEffect } from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, SelectInput } from "../styled";
import { addOrder, fetchEventById } from "../../redux/actions";
import { OrderSchema } from "../validation";

export default function Deposit() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();

    const member = useSelector((state) => state.members.loggedInMember);
    const event = useSelector((state) => state.events.eventById);

    useEffect(() => {
        dispatch(fetchEventById(id));
    }, [dispatch, id]);

    return (
        <Formik
            initialValues={{
                memberID: member._id || "",
                eventID: event._id || "",
                price: event.price || "",
                paymentBy: "",
            }}
            enableReinitialize={true}
            validationSchema={OrderSchema}
            onSubmit={(values, actions) => {
                dispatch(addOrder(values, history));
            }}
        >
            {() => (
                <Form>
                    <Field
                        name="memberID"
                        component={TextInput}
                        disabled={true}
                    />
                    <Field
                        name="eventID"
                        component={TextInput}
                        disabled={true}
                    />
                    <Field name="price" component={TextInput} disabled={true} />
                    <Field name="paymentBy" component={SelectInput}>
                        <option value="">Choose</option>
                        <option value="DEPOSIT">Deposit</option>
                        <option value="BANK">Bank Transfer</option>
                    </Field>
                    <Button variant="primary" block type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
