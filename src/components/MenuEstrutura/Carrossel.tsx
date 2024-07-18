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
        background-color: ${(props) => props.theme.colors.primary};
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

const PrevIcon = () => <p style={{ fontSize: '24px' }}>Anterior</p>;
const NextIcon = () => <p style={{ fontSize: '24px' }}>Próximo</p>;

export const BoxText = styled.div`
  background-color: #4b4b4b;
  width: 500px;
  height: 280px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  color: white;
  padding: 10px;
  padding-right: 100px;
  font-size: 16px;
  font-size: 18px;
`;

const ThumbnailBar = styled.div`
  display: block;
  overflow-x: auto;
  width: 100%;
  margin-bottom: 10px; // Space between thumbnails and text
  padding-left: 100px;
`;

const Thumbnail = styled.img`
  width: 98px;
  height: 60px;
  margin-right: 10px;
  cursor: pointer;
  object-fit: cover;
  &:hover {
    border: 0px solid #fff;
  }
`;

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tempSrc, setTempSrc] = useState(null); // State for temporarily displaying thumbnail images

  const slides = [
    {
      src: "src/assets/images/Elden Ring Wallpaper.jpg",
      alt: "First Slide",
      captions: {
        primary: "Elden Ring",
        secondary: "Explore the mystical world of Elden Ring."
      },
      thumbnails: [
        "src/assets/images/Marika (1).jpg",
        "src/assets/images/Marika (2).jpg",
        "src/assets/images/Marika (3).jpg",
        "src/assets/images/Marika (4).jpg"
      ]
    },
    {
      src: "src/assets/images/DarkSoulsIII.jpg",
      alt: "Second Slide",
      captions: {
        primary: "Dark Souls III",
        secondary: "Discover new adventures and challenges."
      },
      thumbnails: [
        "src/assets/images/DarkSoulsIIIarts (1).jpg",
        "src/assets/images/DarkSoulsIIIarts (2).jpg",
        "src/assets/images/DarkSoulsIIIarts (3).jpg",
        "src/assets/images/DarkSoulsIIIarts.jpg"
      ]
    },
    {
      src: "src/assets/images/Baldur's Gate 3.jpg",
      alt: "Third Slide",
      captions: {
        primary: "Baldur's Gate III",
        secondary: "Face your fate in this epic saga."
      },
      thumbnails: [
        "src/assets/images/Baldurs (1).jpg",
        "src/assets/images/Baldurs (2).jpg",
        "src/assets/images/Baldurs (3).jpg",
        "src/assets/images/Baldurs (4).jpg",
      ]
    },
    {
      src: "src/assets/images/TheWitcher3.jpg",
      alt: "Fourth Slide",
      captions: {
        primary: "The Witcher 3",
        secondary: "Journey through the vast world of The Witcher."
      },
      thumbnails: [
        "src/assets/images/Witcher3 (1).jpg",
        "src/assets/images/Witcher3 (2).jpg",
        "src/assets/images/Witcher3 (3).jpg",
        "src/assets/images/Witcher3 (4).jpg",
      ]
    },
  ];


  const handleThumbnailMouseEnter = (src) => {
    setTempSrc(src);
  };

  const handleThumbnailMouseLeave = () => {
    setTempSrc(null);
  };

  return (
    <BoxCarrossel>
      <CustomCarousel activeIndex={activeIndex} onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img src={index === activeIndex ? (tempSrc || slide.src) : slide.src} alt={slide.alt} />
          </Carousel.Item>
        ))}
      </CustomCarousel>
      <BoxText>
        <div>
          <h1>{slides[activeIndex]?.captions?.primary}</h1>
          <p>{slides[activeIndex]?.captions?.secondary}</p>
        </div>
        <ThumbnailBar>
          {slides[activeIndex]?.thumbnails?.map((thumb, index) => (
            <Thumbnail key={index} src={thumb} alt={`Thumbnail ${index}`}
              onMouseEnter={() => handleThumbnailMouseEnter(thumb)}
              onMouseLeave={handleThumbnailMouseLeave}
            />
          ))}
        </ThumbnailBar>
      </BoxText>
    </BoxCarrossel>
  );
}

export default ImageCarousel;
