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

const CustomPrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transform: translateY(-50%);
  transform: scale(2);
  margin-left: 15px;
`;

const CustomNextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transform: translateY(-50%);
  transform: scale(2);
  margin-right: 15px;
`;

export { CarouselSlider, CarouselImage, CustomPrevArrow, CustomNextArrow };
