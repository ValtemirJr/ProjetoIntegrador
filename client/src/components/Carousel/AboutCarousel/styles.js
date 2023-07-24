import Slider from 'react-slick';
import styled from 'styled-components';

const CarouselSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 0;
    margin: 10px;
    z-index: 1;

    li button:before {
      font-size: 12.5px;
      color: #fff;
    }

    li.slick-active button:before {
      color: #fff;
    }
  }

  @media (max-width: 767px) {
    max-width: 90vw;
    margin: 0 auto;
    .carousel-image {
      max-width: 50%;
      max-height: 50vh;
    }

    .slick-dots li button:before {
      font-size: 10px;
      color: #fff;
    }

    .slick-dots li.slick-active button:before {
      color: #fff;
    }
  }
`;

const CarouselImage = styled.img`
  width: 100vw;
  height: 100vh;
  max-height: 800px;
  object-fit: cover;

  @media (max-width: 767px) {
    max-height: 50vh;
  }
`;

export { CarouselSlider, CarouselImage };
