import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { ErrorMessage } from "formik";

const Margin = styled.div`
    margin: 10px 0;
`;

const CustomError = styled.p`
    color: red;
    font-style: italic;
    margin: 0;
    text-align: center;
`;

export default function TextInput({ field, form, ...props }) {
    return (
        <Margin>
            <InputGroup size="lg" className="mb-3">
                <FormControl {...field} {...props} />
            </InputGroup>
            <ErrorMessage component={CustomError} name={field.name} />
        </Margin>
    );
}
