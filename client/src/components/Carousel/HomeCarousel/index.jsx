import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselSlider, CarouselImage } from './styles';

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

const images = [
  { id: 1, src: require('../../../assets/carousel/1.jpg') },
  { id: 2, src: require('../../../assets/carousel/2.jpg') },
  { id: 3, src: require('../../../assets/carousel/3.jpg') },
  { id: 4, src: require('../../../assets/carousel/4.jpg') },
];

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
