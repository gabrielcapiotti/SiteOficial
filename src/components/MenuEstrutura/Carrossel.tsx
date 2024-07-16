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
    width: 50px; // Largura dos botões
    height: 50px; // Altura dos botões
    background-color: rgba(0, 0, 0, 0.5); // Fundo semi-transparente
    border-radius: 50%; // Formato circular
    top: 50%; // Centraliza verticalmente
    transform: translateY(-50%); // Ajuste fino da centralização vertical
    color: white; // Cor do ícone ou texto
    display: flex;
  }

  .carousel-item {
    display: flex;
    height: 100%;
  }

  img {
    width: 100%; // Ajusta a largura para preencher o espaço disponível
    height: 300px; // Altura fixa
    object-fit: fill; // Garante que a imagem seja contida dentro do contêiner sem cortes
  }
`;

// Adicionando ícones personalizados ou textos dentro dos botões, se necessário
const PrevIcon = () => <span>&lt;</span>; // Ícone personalizado para o botão anterior
const NextIcon = () => <span>&gt;</span>; // Ícone personalizado para o botão próximo

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
