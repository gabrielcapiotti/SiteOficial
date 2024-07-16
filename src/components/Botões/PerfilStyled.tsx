import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import profileImage from '../../assets/images/download.jfif'; // Confirme se o caminho está correto

// Estilizações
export const ProfileContainer = styled.div`
  position: relative;
  display: inline-block; // Assegura que o container não ocupe 100% da largura
  cursor: pointer;
`;

export const ProfileImage = styled.img`
    border: 2px solid ${(props) => props.theme.colors.secondary};
    border-radius: 15px 15px 15px 15px;
    width: 50px; // Ajuste a largura conforme necessário
    height: auto; // Mantém a proporção da imagem
    margin-left: 15px;
    margin-bottom: -15px;
    cursor: pointer; 

    &:hover {
        border-radius: 10px 10px 0px 0px;
        transition: 0.3s ease;
    }
`;

const DropdownContent = styled.div`
    position: absolute;
    background-color: ${(props) => props.theme.colors.primary};
    border: 2px solid ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.tertiary};
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
    display: none; // Oculto inicialmente
    margin: 10px;
    margin-left: 15px;

  ${ProfileContainer}:hover & {
    display: block; // Exibe quando o mouse está sobre o ProfileContainer
  }
`;

// Componente UserProfile com Dropdown
const UserProfile = () => {
    const [showDropdown, setShowDropdown] = useState(false); // Usado para controle manual, se necessário

    return (
        <ProfileContainer onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}>
            <ProfileImage src={profileImage} alt="User Profile" />
            {showDropdown && (
                <DropdownContent>
                    <Link to="/profile/settings"
                        style={{
                            display: 'block',
                            padding: '10px',
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Configurações
                    </Link>
                    <Link to="/profile/logout"
                        style={{
                            display: 'block',
                            padding: '10px',
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >Sair
                    </Link>
                </DropdownContent>
            )}
        </ProfileContainer>
    );
};

export default UserProfile;
