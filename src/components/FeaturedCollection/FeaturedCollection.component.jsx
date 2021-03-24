import React, { useRef, useState } from "react";
import { Container } from "../../constants/container";
import {
  FeaturedCollectionCardContainer,
  FeaturedCollectionContainer,
} from "./FeaturedCollection.style";
import NewInStore from "../NewInStore/NewInStore.component";
import ProductCard from "../ProductCard/ProductCard.component";
import Slider from "react-slick";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryButton from "../Buttons/PrimaryButton.component";
const FeaturedCollection = () => {
  const [featuredCollections, setFeaturedCollections] = useState("newInStore");
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <Container>
        <FeaturedCollectionContainer>
          <p>Featured Collection</p>
          <div className="featured__collection">
            <p>New In Store</p>
            <p>On Sale</p>
          </div>
          <FeaturedCollectionCardContainer>
            <button onClick={() => gotoPrev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="product__container">
              <Slider {...settings} ref={sliderRef}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </Slider>
            </div>
            <button onClick={() => gotoNext()}>
              {" "}
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </FeaturedCollectionCardContainer>
          <br />
          <PrimaryButton>VIEW ALL PRODUCTS</PrimaryButton> <br />
        </FeaturedCollectionContainer>
      </Container>
    </>
  );
};

export default FeaturedCollection;