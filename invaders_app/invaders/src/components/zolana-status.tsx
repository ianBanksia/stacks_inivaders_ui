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
  import { callReadOnlyFunction } from 'micro-stacks/transactions'
  import { cvToTrueValue } from 'micro-stacks/clarity'
//  import { uintCV } from 'micro-stacks/clarity';

// ZOLANA ON
export const ZolanaStatus = () => {
    //const { callReadOnlyFunction, isRequestPending } = checkStatus();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState(null);
    const [cssValue01, setCssValue01] = useState("read-the-docs");
    const [cssValue02, setCssValue02] = useState("read-the-docs");
    const [responsePriceNFT, setResponsePrice] = useState(' ... ');

    const checkStatus = async () => {

      //// Mint Stacks Invaders SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ.stacks-invaders-v0

    await callReadOnlyFunction({
          contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
          contractName: 'stacks-invaders-v0',
          functionName: 'get-price',
          functionArgs: [],
          senderAddress: stxAddress
        }).then((response) => {console.log(response) 

        const truSCValue = cvToTrueValue(response);
        const priceNFT = uintCV(cvToTrueValue(response));
        const priceValue = cvToValue(priceNFT);
        const priceString = cvToString(priceNFT);
        const priceProperString = priceString.toString();
        const priceSubString = priceProperString.substring(1,2);
        const priceSubStringDecimal = priceProperString.substring(2,3);
        const priceFullString = priceSubString + '.' + priceSubStringDecimal;
        console.log(priceNFT);
        console.log(priceValue);
        console.log(priceString);

        if (priceSubString != '') {
            setCssValue01('read-the-docs-navy');
            setResponsePrice(priceFullString);
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
        console.log(response);
        //setResponse(response);
        // if (response == cvToTrueValue(trueCV())) {
        //     document.getElementById('node2Online').className = 'read-the-docs-green';
        // }
       })}>
          {'CONFIRM PRICE'}
        </button>          
      <p id='node1Online' className={cssValue01}>
        Current Price: {responsePriceNFT} STX
      </p> 
      {/* <p id='node2Online' className={cssValue02}>
        Current Block:
      </p>  */}
      </div>
    );
  };