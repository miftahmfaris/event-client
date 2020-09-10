import React from "react";
import styled from "styled-components";
import { Section } from "../styled";
import tagline from "../../assets/images/tagline.svg";

const Container = styled.div`
    display: flex;
    justify-content: center;
    background: blue;
    flex-wrap: wrap;
    padding: 20px;
`;

const Div = styled.div`
    width: 40%;
    margin: 0 20px;
    display: flex;
    align-items: center;
    color: white;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Image = styled(Div)`
    text-align: center;

    & img {
        width: 400px;
    }
`;

export default function Tagline() {
    return (
        <Section>
            <Container>
                <Image>
                    <img src={tagline} alt="tagline" />
                </Image>
                <Div>
                    <div>
                        <h2>Buat Event Online sekarang mudah loh!!!</h2>
                        <h4>
                            Mulai dari acara musik, diskusi, workshop hingga
                            online webinar
                        </h4>
                    </div>
                </Div>
            </Container>
        </Section>
    );
}
