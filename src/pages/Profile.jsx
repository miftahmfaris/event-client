import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Section, FormCenter } from "../components/styled";
import { fetchMember } from "../redux/actions";

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
    const dispatch = useDispatch();
    const member = useSelector((state) => state.members.loggedInMember);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchMember());
    }, [dispatch]);

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
                        {id === undefined ? (
                            <Additional>
                                <Link to="/edit-profile">
                                    <Button variant="secondary">
                                        Edit Profile
                                    </Button>
                                </Link>
                                <Link to="/add-deposit">
                                    <Button variant="primary">
                                        Add Deposit
                                    </Button>
                                </Link>
                            </Additional>
                        ) : (
                            <div></div>
                        )}
                    </Border>
                </div>
            </Container>
        </Section>
    );
}
