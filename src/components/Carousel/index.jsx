import React from "react";
import Swiper from "react-id-swiper";
import styled from "styled-components";
import { Section } from "../styled";
import Image1 from "../../assets/images/event-1.jpg";
import Image2 from "../../assets/images/event-2.jpg";
import Image3 from "../../assets/images/event-3.jpg";

const ImageContainer = styled.div`
    width: 100%;
    height: 300px;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export default function Carousel() {
    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        infinite: true,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    };

    return (
        <Section>
            <Swiper {...params}>
                <ImageContainer>
                    <img src={Image1} alt="Image1" />
                </ImageContainer>
                <ImageContainer>
                    <img src={Image2} alt="Image2" />
                </ImageContainer>
                <ImageContainer>
                    <img src={Image3} alt="Image3" />
                </ImageContainer>
            </Swiper>
        </Section>
    );
}
