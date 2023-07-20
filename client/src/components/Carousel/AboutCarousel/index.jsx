import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselSlider, CarouselImage } from './styles';

// Configurações do carousel
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Imagens do carousel que vêm da pasta assets
const images = [
  { id: 1, src: require('../../../assets/images/entry_carousel.jpg') },
  { id: 2, src: require('../../../assets/images/reception_carousel.jpg') },
  { id: 3, src: require('../../../assets/images/wait_reception.jpg') },
  { id: 4, src: require('../../../assets/images/room2.jpg') },
  { id: 5, src: require('../../../assets/images/room1.jpg') },
];

// Componente de carousel para página sobre a clínica
export default function AboutCarousel() {
  return (
    <CarouselSlider {...settings}>
      {/* Mapeia as imagens e as renderiza, gerando elementos */}
      {images.map((image) => (
        <div key={image.id}>
          <CarouselImage src={image.src} alt="carousel" />
        </div>
      ))}
    </CarouselSlider>
  );
}
