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
 // import { $ } from 'jquery'
//  import { uintCV } from 'micro-stacks/clarity';

// ZOLANA ON
export const InvadersPreview = () => {
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
        console.log(truSCValue);
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
        // await callReadOnlyFunction({
        //     contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
        //     contractName: 'stacks-invaders-v0',
        //     functionName: 'get-price',
        //     functionArgs: [],
        //     senderAddress: stxAddress
        //   }).then((response2) => {console.log(response2) 
  
        //   const truSCValue2 = cvToTrueValue(response2);
        //   console.log(truSCValue2);
        //   if (truSCValue2 == cvToTrueValue(trueCV())) {
        //     setCssValue02('read-the-docs-green');

        //   } else {
        //     setCssValue02('read-the-docs-red');
        //   }
        //   //return truSCValue;
        //   });

        //return callReadOnlyFunction;
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

      <div className={cssValue03} >
       
        {/* <svg xmlns='http://www.w3.org/2000/svg' op='pixels' viewBox='0 0 12 12'><path d='M4 5h1v1h-1M8 5h1v1h-1' fill='#000000'/><path d='M2 0h1v1h-1M9 0h1v1h-1M1 1h1v1h-1M10 1h1v1h-1M2 2h1v1h-1M9 2h1v1h-1M3 3h1v1h-1M8 3h1v1h-1M0 9h1v1h-1M0 10h1v1h-1M2 9h1v1h-1M9 9h1v1h-1M11 9h1v1h-1M11 10h1v1h-1M3 10h1v1h-1M4 10h1v1h-1M7 10h1v1h-1M8 10h1v1h-1M1 11h1v1h-1M10 11h1v1h-1' fill='#FF33F0'/><path d='M2 4h1v1h-1M3 4h1v1h-1M4 4h1v1h-1M5 4h1v1h-1M6 4h1v1h-1M7 4h1v1h-1M8 4h1v1h-1M9 4h1v1h-1M9 5h1v1h-1M10 5h1v1h-1M10 6h1v1h-1M9 6h1v1h-1M8 6h1v1h-1M7 6h1v1h-1M6 6h1v1h-1M5 6h1v1h-1M4 6h1v1h-1M3 6h1v1h-1M2 6h1v1h-1M1 6h1v1h-1M0 6h1v1h-1M0 7h1v1h-1M0 8h1v1h-1M1 5h1v1h-1M2 5h1v1h-1M2 7h1v1h-1M3 7h1v1h-1M3 8h1v1h-1M2 8h1v1h-1M4 8h1v1h-1M5 8h1v1h-1M6 8h1v1h-1M7 8h1v1h-1M8 8h1v1h-1M9 8h1v1h-1M9 7h1v1h-1M8 7h1v1h-1M5 5h1v1h-1M6 5h1v1h-1M11 6h1v1h-1M11 7h1v1h-1M11 8h1v1h-1' fill='#009EFF'/><path d='M3 5h1v1h-1M7 5h1v1h-1M4 7h1v1h-1M5 7h1v1h-1M6 7h1v1h-1M7 7h1v1h-1' fill='#FFFFFF'/></svg> */}
      </div>
      </div>

    );
  };