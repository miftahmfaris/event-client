import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { Section, FormCenter } from "../components/styled";
import { useDispatch } from "react-redux";
import { activation } from "../redux/actions";

const SectionButton = styled(FormCenter)`
    & a {
        margin: 0 10px;
    }
`;

export default function Activation() {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(activation(id));
    }, [dispatch, id]);

    return (
        <Section>
            <FormCenter>
                <div>
                    <h1>Activation Successfully</h1>
                    <SectionButton>
                        <Link to="/">
                            <Button variant="primary">Home</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="primary">Login</Button>
                        </Link>
                    </SectionButton>
                </div>
            </FormCenter>
        </Section>
    );
}
