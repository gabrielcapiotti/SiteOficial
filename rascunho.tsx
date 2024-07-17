import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

export const BoxCarrossel = styled.main`
  width: 900px;
  height: 300px;
  background-color: white;
  color: black;
  border: 1px solid black;
  margin: 10px 10px 0px 10px;
  display: flex;
  overflow: hidden;
  position: relative; // Essencial para posicionamento dos botões
`;

const CustomCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;

  .carousel-control-prev, .carousel-control-next {
    width: 50px; // Largura dos botões ajustada para não obstruir muito a imagem
    height: 100%; // Altura total do carrossel
    background-color: rgba(0, 0, 0, 0.5); // Fundo semi-transparente
    top: 0;
    transform: translateY(0); // Centraliza verticalmente
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .carousel-control-prev {
    left: 0; // Posiciona o botão à esquerda dentro da caixa
  }

  .carousel-control-next {
    right: 0; // Posiciona o botão à direita dentro da caixa
  }

  .carousel-control-prev-icon, .carousel-control-next-icon {
    display: none; // Remove ícones padrão
  }

  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  img {
    width: auto; // Ajusta a largura para manter a proporção sem esticar
    max-width: 100%; // Assegura que a imagem não ultrapasse a largura do carrossel
    height: auto; // Altura automática para manter a proporção
    max-height: 100%; // Assegura que a imagem não ultrapasse a altura do carrossel
    object-fit: contain; // Garante que toda a imagem seja visível sem cortes
  }
`;

const PrevIcon = () => <span style={{ fontSize: '24px' }}>&lt;</span>; // Ícone personalizado para o botão anterior
const NextIcon = () => <span style={{ fontSize: '24px' }}>&gt;</span>; // Ícone personalizado para o botão próximo

const ImageCarousel = () => {
    return (
        <BoxCarrossel>
            <CustomCarousel prevIcon={<PrevIcon />} nextIcon={<NextIcon />}>
                <Carousel.Item>
                    <img
                        src="src/assets/images/Elden Ring Wallpaper.jpg"
                        alt="First Slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="src/assets/images/download.jfif"
                        alt="Second Slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="src/assets/images/Elden Ring Wallpaper.jpg"
                        alt="Third Slide"
                    />
                </Carousel.Item>
            </CustomCarousel>
        </BoxCarrossel>
    );
};

export default ImageCarousel;
