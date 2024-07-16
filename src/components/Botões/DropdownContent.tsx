import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtomDefaultStyled } from './ButtomDefaultStyled';


// Define estilo para conteúdo do dropdown
export const DropdownContent = styled.div`
    width: 150px;
    height: auto;
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 0px 18px 18px 18px;
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    margin-left: 15px;
    margin-top: -15px;
    z-index: 1;
    justify-content: center;
    text-align: center;
`;

// Define o container do botão que também será o container relativo para o dropdown
export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block; // Usado para garantir que o botão e o conteúdo do dropdown alinhem corretamente
`;

export const Links = styled.link`
    margin: 20px;

`

// Componente de Botão Dropdown
const DropdownButton = ({ label, dropdownItems }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <ButtonContainer>
            <ButtomDefaultStyled
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                aria-expanded={showDropdown}>
                {label}
            </ButtomDefaultStyled>
            {showDropdown && (
                <DropdownContent>
                    {dropdownItems.map(item => (
                        <Link key={item.path} to={item.path} style={{ padding: '10px', textDecoration: 'none', color: 'white' }}>
                            {item.label}
                        </Link>
                    ))}
                </DropdownContent>
            )}
        </ButtonContainer>
    );
};

export default DropdownButton;
