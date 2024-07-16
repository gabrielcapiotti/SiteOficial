import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 98.7vw;
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    display: flex;
    align-items: center; // Centraliza verticalmente
    justify-content:space-between; // Centraliza horizontalmente se tiver um item só ou distribui espaço igualmente se tiver múltiplos itens
    padding: 10px 0; // Adiciona um pouco de padding verticalmente
    

`;
export default HeaderStyled;

export const LayoutButtom = styled.header`
    background-color: #5300d86f;
    color: white;
    display: flex;
    width: 100%;
    text-align:end;
    justify-content:space-between;
    margin-left: 10px;
    margin-right: 10px;
`



