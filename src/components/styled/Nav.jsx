import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: black;
    padding: 0 20px;
    color: white;

    @media (max-width: 768px) {
        & {
            display: block;
        }

        & h1 {
            text-align: center;
            margin: 0;
        }
    }
`;

export default Nav;
