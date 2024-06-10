import {
    uintCV,
    intCV,
    bufferCV,
    stringAsciiCV,
    stringUtf8CV,
    standardPrincipalCV,
    trueCV,
    cvToString,
    cvToValue
  } from 'micro-stacks/clarity';

  // import { Carousel } from "flowbite-react";
  // import { Carousel } from "react-responsive-carousel";
  // import "react-responsive-carousel/lib/styles/carousel.min.css";

// images:
const carouselProducts = [
  {
    id: 1,
    name: "Invader Block 1",
    imageUrl: "/assets/invaders/unit7.svg"
  },
  {
    id: 2,
    name: "Invader Block 2",
    imageUrl: "/assets/invaders/unit8.svg"
  },
  {
    id: 3,
    name: "Invader Block 3",
    imageUrl: "/assets/invaders/unit9.svg"
  }
];  


// function  
export const InvadersPreviewCarousel = () => {


    return (
      <div>
      <p >
      Stacks Invaders is provided as is, with no garantees. 
     </p> 
      <p >
      This is an alpha product and relies on a new meta-protocol for image generation.
    </p> 
    </div>
    );
  };