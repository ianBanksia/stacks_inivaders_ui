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
  import {
    makeStandardFungiblePostCondition,
    makeContractFungiblePostCondition,
    createAssetInfo,
    FungibleConditionCode,
    makeStandardSTXPostCondition } from 'micro-stacks/transactions';

// ZOLANA ON
export const InvadersPreviewBlockJack = () => {

    const { stxAddress } = useAccount();
    const [response, setResponse] = useState('');
    const [cssValue01, setCssValue01] = useState("read-the-docs");
    const [cssValue02, setCssValue02] = useState('loading');
    const [inputValue, setInputValue] = useState("");
    const [responsePriceNFT, setResponsePrice] = useState(' ... ');
    const [cssValue03, setCssValue03] = useState("read-the-docs-hidden");

    const checkStatus = async () => {
      const inputStx = '0';
      const stxMax = inputStx.concat('000000');
      const postConditions = [ makeStandardSTXPostCondition(
        stxAddress!,
        FungibleConditionCode.LessEqual,
        stxMax
      ),
    ]; 
    const tokenID = inputValue;
    const functionArgsCall = [
      uintCV(tokenID)
    ];
      await callReadOnlyFunction({
        contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
        contractName: 'rooooons-cash-out',
        functionName: 'check-rooons-balance',
        functionArgs: functionArgsCall }).then((response) => {console.log(response) 
          const truSCValue = cvToTrueValue(response);
          const priceNFT = uintCV(cvToTrueValue(response));
          const priceValue = cvToValue(priceNFT);
          const priceString = cvToString(priceNFT);
          const priceProperString = priceString.toString();
          const priceSubString = priceProperString.substring(1,2);
          const priceSubStringDecimal = priceProperString.substring(2,3);
          const priceFullString = priceSubString + '000';
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
        };
    return (
      <div className="read-the-docs" >
      <button 
      style={{ background: "purple" }}
      onClick={() => checkStatus().then((response) => { 
        console.log(response);
        //setResponse(response);
        // if (response == cvToTrueValue(trueCV())) {
        //     document.getElementById('node2Online').className = 'read-the-docs-green';
        // }
       })}> 
                 {'Check Balance'}  
        </button>   
        <br/>   
        <p>     </p>
        <label>
        Token ID:  
        <input 
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      <p id='node1Online' className={cssValue01}>
         {responsePriceNFT}
      </p>         
      </label>

       
        {/* <svg xmlns='http://www.w3.org/2000/svg' op='pixels' viewBox='0 0 12 12'><path d='M4 5h1v1h-1M8 5h1v1h-1' fill='#000000'/><path d='M2 0h1v1h-1M9 0h1v1h-1M1 1h1v1h-1M10 1h1v1h-1M2 2h1v1h-1M9 2h1v1h-1M3 3h1v1h-1M8 3h1v1h-1M0 9h1v1h-1M0 10h1v1h-1M2 9h1v1h-1M9 9h1v1h-1M11 9h1v1h-1M11 10h1v1h-1M3 10h1v1h-1M4 10h1v1h-1M7 10h1v1h-1M8 10h1v1h-1M1 11h1v1h-1M10 11h1v1h-1' fill='#FF33F0'/><path d='M2 4h1v1h-1M3 4h1v1h-1M4 4h1v1h-1M5 4h1v1h-1M6 4h1v1h-1M7 4h1v1h-1M8 4h1v1h-1M9 4h1v1h-1M9 5h1v1h-1M10 5h1v1h-1M10 6h1v1h-1M9 6h1v1h-1M8 6h1v1h-1M7 6h1v1h-1M6 6h1v1h-1M5 6h1v1h-1M4 6h1v1h-1M3 6h1v1h-1M2 6h1v1h-1M1 6h1v1h-1M0 6h1v1h-1M0 7h1v1h-1M0 8h1v1h-1M1 5h1v1h-1M2 5h1v1h-1M2 7h1v1h-1M3 7h1v1h-1M3 8h1v1h-1M2 8h1v1h-1M4 8h1v1h-1M5 8h1v1h-1M6 8h1v1h-1M7 8h1v1h-1M8 8h1v1h-1M9 8h1v1h-1M9 7h1v1h-1M8 7h1v1h-1M5 5h1v1h-1M6 5h1v1h-1M11 6h1v1h-1M11 7h1v1h-1M11 8h1v1h-1' fill='#009EFF'/><path d='M3 5h1v1h-1M7 5h1v1h-1M4 7h1v1h-1M5 7h1v1h-1M6 7h1v1h-1M7 7h1v1h-1' fill='#FFFFFF'/></svg> */}
      </div>

    );
  };