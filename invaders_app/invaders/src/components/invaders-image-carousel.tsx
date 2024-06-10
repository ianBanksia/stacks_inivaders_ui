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
  import { utf8ToBytes } from 'micro-stacks/common';
  import { useAccount } from '@micro-stacks/react';
  import { useState } from 'react';  
  import { useOpenContractCall } from '@micro-stacks/react';  
  import { callReadOnlyFunction } from 'micro-stacks/transactions';
  import { cvToTrueValue } from 'micro-stacks/clarity';


export const InvadersPreviewCarousel = () => {
// Define an array of SVG strings
const svgStrings: string[] = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="blue" /></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><polygon points="50,0 100,100 0,100" fill="green" /></svg>'
];

// Create a carousel container element
const carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel');

// Create previous and next buttons
const prevButton = document.createElement('button');
prevButton.innerText = 'Previous';
prevButton.addEventListener('click', showPreviousImage);

const nextButton = document.createElement('button');
nextButton.innerText = 'Next';
nextButton.addEventListener('click', showNextImage);

// Initialize the current image index
let currentImageIndex = 0;

// Function to show the previous image
function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + svgStrings.length) % svgStrings.length;
  updateCarousel();
}

// Function to show the next image
function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % svgStrings.length;
  updateCarousel();
}

// Function to update the carousel with the current image
function updateCarousel() {
  carouselContainer.innerHTML = '';
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.innerHTML = svgStrings[currentImageIndex];
  carouselContainer.appendChild(svgElement);
}

// Initial update of the carousel
updateCarousel();

// Add the carousel container and buttons to the document body
document.body.appendChild(prevButton);
document.body.appendChild(carouselContainer);
document.body.appendChild(nextButton);



    //const { callReadOnlyFunction, isRequestPending } = checkStatus();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState('');
    const [cssValue01, setCssValue01] = useState("read-the-docs");
    const [cssValue02, setCssValue02] = useState('loading');
    const [cssValue03, setCssValue03] = useState("read-the-docs-hidden");
    const [responsePriceNFT, setResponsePrice] = useState(cvToTrueValue(stringAsciiCV('0')));

    const checkStatus = async () => {

      //// Mint Stacks Invaders SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ.stacks-invaders-v0

    await callReadOnlyFunction({
          contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
          contractName: 'stacks-invaders-v0',
          functionName: 'get-current-block-height-design',
          functionArgs: [],
          senderAddress: stxAddress
        }).then((response) => {console.log(response) 

        const truSCValue = cvToTrueValue(response);
        //const svgString = cvToString(cvToTrueValue(response));
        //const svgProperString = truSCValue.toString();
        //const priceSubString = priceProperString.substring(1,2);
        //console.log(truSCValue);
        //svgStrings.push(truSCValue);
        //console.log(svgString);
        //console.log(svgProperString);

        if (truSCValue != '') {
            setCssValue01('read-the-docs-navy');
          //  setResponsePrice(truSCValue);
            setCssValue02('retrieved!')
            setCssValue03('read-the-docs-navy');
           // $('imageReceiver').append(responsePriceNFT);
          } else {
            setCssValue01('read-the-docs-red');
          }        //return truSCValue;
        });

    };          

    return (
      <div>
      <button 
      style={{ background: "navy" }}
      
        onClick={() => checkStatus().then((response) => { 
        setResponse(responsePriceNFT);
        //TODO: create elements that get the block-heigh and regenerate based on block height (input field?)
       })}>
          {'PREVIEW NEXT INVADER'}
        </button>            
      <p id='node1Online' className={cssValue01}>
        Next invader {cssValue02}
      </p> 
      </div>

    );
  };