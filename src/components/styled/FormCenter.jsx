import styled from "styled-components";

const FormCenter = styled.div`
    display: flex;
    justify-content: center;

    & > div {
        width: 30%;
    }

    & h1 {
        text-align: center;
    }

    @media (max-width: 768px) {
        & > div {
            width: 80%;
        }
    }
`;

export default FormCenter;
