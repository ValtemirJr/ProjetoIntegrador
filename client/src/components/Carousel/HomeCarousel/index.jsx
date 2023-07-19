import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselSlider, CarouselImage } from './styles';

// Configurações do carousel
const settings = {
  dots: true,
  infinite: true,
  speed: 750,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
};

// Imagens do carousel que vem da pasta assets
const images = [
  { id: 1, src: require('../../../assets/carousel/1.jpg') },
  { id: 2, src: require('../../../assets/carousel/2.jpg') },
  { id: 3, src: require('../../../assets/carousel/3.jpg') },
  { id: 4, src: require('../../../assets/carousel/4.jpg') },
];

// Componente de carousel para página inicial
export default function HomeCarousel() {
  return (
    <CarouselSlider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <CarouselImage src={image.src} alt="carousel" />
        </div>
      ))}
    </CarouselSlider>
  );
}
