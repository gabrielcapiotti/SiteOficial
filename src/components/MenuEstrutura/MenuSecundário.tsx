import styled from "styled-components"

export const Boxing = styled.main`
    width: 200px;
    height: auto;
    background-color: #2c2c2c;
    border: 1px solid black;
    display: block;
    justify-content: start;
    align-items: start;
    margin: 10px 10px 0px 40px;
    box-shadow: 1px 1px 1px 1px black;
`

export const ButtomMenuSecondary = styled.button`
    background-color: #4b4b4b;
    color: white;
    width: 200px;
    font-size: 15px;
    border: 1px solid black;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: black;
        transition: 0.3s ease;

    }
`;
