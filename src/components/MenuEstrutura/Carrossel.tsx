import React, { useState } from 'react';
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
  position: relative;
  box-shadow: 1px 1px 1px 1px black;
`;

const CustomCarousel = styled(Carousel)`
  width: calc(100% - 150px);
  height: 100%;

  .carousel-control-prev, .carousel-control-next {
    width: 100px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    transform: translateY(0);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    &:hover {
        background-color:  ${(props) => props.theme.colors.primary};
        color: black;
        transition: 0.3s ease;
    }
  }

  .carousel-control-prev {
    left: 0px;
  }

  .carousel-control-next {
    right: 0px;
  }

  .carousel-control-prev-icon, .carousel-control-next-icon {
    display: none;
  }

  .carousel-item {
    display: none;
  }

  .carousel-item.active {
    display: flex;
    justify-content: start;
    align-items: start;
    height: 100%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .carousel-indicators {
    bottom: -35px;
  }
`;

const PrevIcon = () => <span style={{ fontSize: '24px' }}>&lt;</span>;
const NextIcon = () => <span style={{ fontSize: '24px' }}>&gt;</span>;

export const BoxText = styled.div`
  background-color: #4b4b4b;
  width: 500px;
  height: 280px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 10px;
  padding-right: 100px;
  font-size: 16px;
`;

const ThumbnailBar = styled.div`
  display: block;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 10px; // Space between thumbnails and text
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  object-fit: cover;
  &:hover {
    border: 1px solid #fff;
  }
`;

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { src: "src/assets/images/Elden Ring Wallpaper.jpg", alt: "First Slide", caption: "Explore the mystical world of Elden Ring." },
    { src: "src/assets/images/download.jfif", alt: "Second Slide", caption: "Discover new adventures and challenges." },
    { src: "src/assets/images/Elden Ring Wallpaper.jpg", alt: "Third Slide", caption: "Face your fate in this epic saga." },
    { src: "src/assets/images/download.jfif", alt: "Second Slide", caption: "Discover new adventures and challenges." },
  ];

  return (
    <BoxCarrossel>
      <CustomCarousel prevIcon={<PrevIcon />} nextIcon={<NextIcon />} activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img src={slide.src} alt={slide.alt} />
          </Carousel.Item>
        ))}
      </CustomCarousel>
      <BoxText>
        <div>
          {slides[activeIndex].caption}
        </div>
        <ThumbnailBar>
          {slides.map((slide, index) => (
            <Thumbnail key={index} src={slide.src} alt={slide.alt} onClick={() => setActiveIndex(index)} />
          ))}
        </ThumbnailBar>
        <div>
          {slides[activeIndex].caption}
        </div>
        <div>
          {slides[activeIndex].caption}
        </div>
      </BoxText>
    </BoxCarrossel>
  );
};

export default ImageCarousel;
