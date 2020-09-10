import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Section, FormCenter } from "../components/styled";

const MemberProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    padding: 25px;
`;

const Border = styled.div`
    border: 5px dotted black;
`;

const Avatar = styled.div`
    width: 200px;
    margin: 0 25px;

    & img {
        width: 100%;
    }
`;

const Biodata = styled.div`
    align-items: center;
    margin: 0 25px;
`;

const Container = styled(FormCenter)`
    & > div {
        width: 50%;
    }
`;

const Additional = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    & button {
        margin: 0 10px;
    }
`;

export default function Profile() {
    const member = useSelector((state) => state.members.loggedInMember);

    return (
        <Section>
            <Container>
                <div>
                    <h1>Profile</h1>
                    <Border>
                        <MemberProfile>
                            <Avatar>
                                <img src={member.avatar} alt="avatar" />
                            </Avatar>
                            <Biodata>
                                <p>Fullname: {member.fullname}</p>
                                <p>Email: {member.email}</p>
                                <p>Balance: {member.balance}</p>
                            </Biodata>
                        </MemberProfile>
                        <Additional>
                            <Link to="/edit-profile">
                                <Button variant="secondary">
                                    Edit Profile
                                </Button>
                            </Link>
                            <Link to="/deposit">
                                <Button variant="primary">Add Deposit</Button>
                            </Link>
                        </Additional>
                    </Border>
                </div>
            </Container>
        </Section>
    );
}
