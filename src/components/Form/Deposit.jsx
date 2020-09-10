import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextInput } from "../styled";
import { DepositSchema } from "../validation";
import { addDeposit } from "../../redux/actions";

export default function Deposit() {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                amount: "",
            }}
            validationSchema={DepositSchema}
            onSubmit={(values, actions) => {
                dispatch(addDeposit(values, history));
            }}
        >
            {() => (
                <Form>
                    <Field
                        name="amount"
                        placeholder="Input your amount deposit here"
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
