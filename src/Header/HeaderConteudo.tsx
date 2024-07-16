import { useState } from 'react';
import { Row, Col } from 'react-bootstrap'; // Corrigido importações de React Bootstrap
import { ButtomDefaultStyled } from '../components/Botões/ButtomDefaultStyled';
import HeaderStyled from './HeaderStyled';
import { ButtonContainer, DropdownContent } from '../components/Botões/DropdownContent';
import InputStyled from '../components/Botões/InputStyled';
import UserProfile from '../components/Botões/PerfilStyled';
import { ButtomLinks } from '../components/Botões/ButtomLinks';

function HeaderConteudo() {
    const [showHomeDropdown, setShowHomeDropdown] = useState(false);
    const [showCategoriasDropdown, setShowCategoriasDropdown] = useState(false);
    const [showDistribuidorasDropdown, setShowDistribuidorasDropdown] = useState(false);
    const [showOficinaDropdown, setShowOficinaDropdown] = useState(false);

    return (
        <HeaderStyled>
            <Row className="justify-content-between align-items-center">
                <Col md={4} className="d-flex justify-content-start">
                    <UserProfile />
                    <ButtonContainer onMouseEnter={() => setShowHomeDropdown(true)} onMouseLeave={() => setShowHomeDropdown(false)}>
                        <ButtomDefaultStyled>Home</ButtomDefaultStyled>
                        {showHomeDropdown && (
                            <DropdownContent>
                                <ButtomLinks to="/home/subpage1" style={{ borderRadius: '0px 15px 0px 0px' }}>????</ButtomLinks>
                                <ButtomLinks to="/home/subpage2">????</ButtomLinks>
                                <ButtomLinks to="/home/subpage3">????</ButtomLinks>
                                <ButtomLinks to="/home/subpage4">????</ButtomLinks>
                                <ButtomLinks to="/home/subpage5" style={{ borderRadius: '0px 0px 15px 15px' }}>????</ButtomLinks>
                            </DropdownContent>
                        )}
                    </ButtonContainer>

                    <ButtonContainer>
                        <ButtomDefaultStyled>Biblioteca</ButtomDefaultStyled>
                    </ButtonContainer>

                    <ButtonContainer onMouseEnter={() => setShowCategoriasDropdown(true)} onMouseLeave={() => setShowCategoriasDropdown(false)}>
                        <ButtomDefaultStyled>Categorias</ButtomDefaultStyled>
                        {showCategoriasDropdown && (
                            <DropdownContent>
                                <ButtomLinks to="/categorias/subpage1" style={{ borderRadius: '0px 15px 0px 0px' }}>????</ButtomLinks>
                                <ButtomLinks to="/categorias/subpage2">????</ButtomLinks>
                                <ButtomLinks to="/categorias/subpage3">????</ButtomLinks>
                                <ButtomLinks to="/categorias/subpage4">????</ButtomLinks>
                                <ButtomLinks to="/categorias/subpage5" style={{ borderRadius: '0px 0px 15px 15px' }}>????</ButtomLinks>
                            </DropdownContent>
                        )}
                    </ButtonContainer>

                    <ButtonContainer onMouseEnter={() => setShowDistribuidorasDropdown(true)} onMouseLeave={() => setShowDistribuidorasDropdown(false)}>
                        <ButtomDefaultStyled>Distribuidoras</ButtomDefaultStyled>
                        {showDistribuidorasDropdown && (
                            <DropdownContent>
                                <ButtomLinks to="/distribuidoras/subpage1" style={{ borderRadius: '0px 15px 0px 0px' }}>FromSoftware</ButtomLinks>
                                <ButtomLinks to="/distribuidoras/subpage2">CD Projekt Red</ButtomLinks>
                                <ButtomLinks to="/distribuidoras/subpage3">Rockstar</ButtomLinks>
                                <ButtomLinks to="/distribuidoras/subpage4">Larian Studios</ButtomLinks>
                                <ButtomLinks to="/distribuidoras/subpage5" style={{ borderRadius: '0px 0px 15px 15px' }}>Konami</ButtomLinks>
                            </DropdownContent>
                        )}
                    </ButtonContainer>

                    <ButtonContainer onMouseEnter={() => setShowOficinaDropdown(true)} onMouseLeave={() => setShowOficinaDropdown(false)}>
                        <ButtomDefaultStyled>Oficina</ButtomDefaultStyled>
                        {showOficinaDropdown && (
                            <DropdownContent>
                                <ButtomLinks to="/oficina/subpage1" style={{ borderRadius: '0px 15px 0px 0px' }}>Subpágina 1</ButtomLinks>
                                <ButtomLinks to="/oficina/subpage2">Subpágina 2</ButtomLinks>
                                <ButtomLinks to="/oficina/subpage3">Subpágina 3</ButtomLinks>
                                <ButtomLinks to="/oficina/subpage3">Subpágina 4</ButtomLinks>
                                <ButtomLinks to="/oficina/subpage3" style={{ borderRadius: '0px 0px 15px 15px' }}>Subpágina 5</ButtomLinks>
                            </DropdownContent>
                        )}
                    </ButtonContainer>
                </Col>
            </Row>
            <Row className="justify-content-between align-items-center">
                <Col md={4} className="d-flex justify-content-end">
                    <InputStyled className="form-control me-2" placeholder="Pesquisar" />
                    <ButtomDefaultStyled> <img src="src\assets\images\cart4.svg" style={{ marginRight: '10px' }} /> Lista de Compras</ButtomDefaultStyled>
                </Col>
            </Row>

        </HeaderStyled >
    );
}

export default HeaderConteudo;
