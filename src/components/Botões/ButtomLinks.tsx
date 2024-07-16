import styled from "styled-components";



export const ButtomLinks = styled.button`
    background-color: #4b4b4b;
    color: white;
    width: auto;
    font-size: 11px;
    border: 1px solid black;
    margin: 1px;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: black;
        transition: 0.3s ease;

    }
`;