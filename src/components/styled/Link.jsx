import styled from "styled-components";

const Link = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;

    & li {
        list-style-type: none;
        margin: 0 10px;
    }

    & li a {
        color: white;
    }

    @media (max-width: 768px) {
        & {
            padding: 10px 0;
        }
    }
`;

export default Link;
