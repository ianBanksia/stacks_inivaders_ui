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

    const { openContractCall, isRequestPending } = useOpenContractCall();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState('');
    const [cssValue01, setCssValue01] = useState("read-the-docs");
    const [cssValue02, setCssValue02] = useState('loading');
    const [inputValue, setInputValue] = useState("");

    const [cssValue03, setCssValue03] = useState("read-the-docs-hidden");
    const [responsePriceNFT, setResponsePrice] = useState(cvToTrueValue(stringAsciiCV('0')));

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
      stringAsciiCV(tokenID)
    ];
      await openContractCall({
        contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
        contractName: 'roooooooooons',
        functionName: 'confirm-taproot-address-collab',
        functionArgs: functionArgsCall,
        postConditions,
       // attachment: '0x',
        onFinish: async data => {
          console.log('finished contract call!', data);
         // setResponse(data);
        },
        onCancel: () => {
          console.log('popup closed!');
        },
      });
    };

    const checkStatus0 = async () => {
      let Iwallet = 1 ; //DUMMY VALUE
      //Iwallet = inputValue;
      //let IWalletNumber: number = +Iwallet;
      const times = 40;

      //for(let i = 0; i < times; i++){
        //Iwallet = IWalletNumber.toString();
        const functionArgs = [
          stringAsciiCV(inputValue)
        ];
    await callReadOnlyFunction({
          contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
          contractName: 'stacks-invaders-80',
          functionName: 'get-80-special-design',
          functionArgs: functionArgs,
          senderAddress: stxAddress
        }).then((response) => {console.log(response) 

        const truSCValue = cvToTrueValue(response) as string;
        const truSCValueString = truSCValue.toString();
        console.log(truSCValueString);
        console.log(truSCValue);
        if (truSCValue != '') {
            setCssValue01('read-the-docs-navy');
            //setResponsePrice(truSCValueString);
            setCssValue02('retrieved!')
            setCssValue03('read-the-docs-navy');
            const svgContent = truSCValueString;
            //const svgContent = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M4 5h1v1h-1M8 5h1v1h-1' fill='#000000'/><path d='M2 0h1v1h-1M9 0h1v1h-1M1 1h1v1h-1M10 1h1v1h-1M2 2h1v1h-1M9 2h1v1h-1M3 3h1v1h-1M8 3h1v1h-1M0 9h1v1h-1M0 10h1v1h-1M2 9h1v1h-1M9 9h1v1h-1M11 9h1v1h-1M11 10h1v1h-1M3 10h1v1h-1M4 10h1v1h-1M7 10h1v1h-1M8 10h1v1h-1M1 11h1v1h-1M10 11h1v1h-1' fill='#FF33F0'/><path d='M2 4h1v1h-1M3 4h1v1h-1M4 4h1v1h-1M5 4h1v1h-1M6 4h1v1h-1M7 4h1v1h-1M8 4h1v1h-1M9 4h1v1h-1M9 5h1v1h-1M10 5h1v1h-1M10 6h1v1h-1M9 6h1v1h-1M8 6h1v1h-1M7 6h1v1h-1M6 6h1v1h-1M5 6h1v1h-1M4 6h1v1h-1M3 6h1v1h-1M2 6h1v1h-1M1 6h1v1h-1M0 6h1v1h-1M0 7h1v1h-1M0 8h1v1h-1M1 5h1v1h-1M2 5h1v1h-1M2 7h1v1h-1M3 7h1v1h-1M3 8h1v1h-1M2 8h1v1h-1M4 8h1v1h-1M5 8h1v1h-1M6 8h1v1h-1M7 8h1v1h-1M8 8h1v1h-1M9 8h1v1h-1M9 7h1v1h-1M8 7h1v1h-1M5 5h1v1h-1M6 5h1v1h-1M11 6h1v1h-1M11 7h1v1h-1M11 8h1v1h-1' fill='#009EFF'/><path d='M3 5h1v1h-1M7 5h1v1h-1M4 7h1v1h-1M5 7h1v1h-1M6 7h1v1h-1M7 7h1v1h-1' fill='#FFFFFF'/></svg>`;
          

            //
            const svgBlob = new Blob([svgContent], { type: 'image/svg+xml' });

            const overlayImage = new Image();
            overlayImage.src = `data:image/svg+xml,${encodeURIComponent(svgContent)}`;

            const canvas = document.createElement('canvas');
              
            const baseImage = new Image();
          //  baseImage.src = '/assets/background.de110475.png'; 

            baseImage.src = '/src/components/data/pixelSpace600.png';
          //  baseImage.src = 'https://nak-ops.com/stacks-invaders/images/4eef20ef5d853a57a956f7ecc0b7ea56.png';
          //  baseImage.crossOrigin="anonymous" ;
            baseImage.onload = () => {
              canvas.width = baseImage.width;
              canvas.height = baseImage.height;
              const context = canvas.getContext('2d');
              if (context) {
                context.drawImage(baseImage, 0, 0);
                context.drawImage(overlayImage, 25, 25, 550, 550);

                const mergedImage = canvas.toDataURL('image/png');
                const downloadLink = document.createElement('a');
                downloadLink.href = mergedImage;
                const numberFile = Iwallet - 1;
                const numberString = numberFile.toString(); 
                downloadLink.download = numberString + `.png`;
                downloadLink.click();
              }
            };
            Iwallet = Iwallet + 1;

          } else {
            setCssValue01('read-the-docs-red');
          }        //return truSCValue;
        });
      //};
    };          

    return (
      <div className="read-the-docs" >
      <button 
      style={{ background: "purple" }}
      onClick={() => checkStatus()}>
          {isRequestPending ? 'request pending...' : 'Collab Taproot - Jack'}      
        </button>   
        <br/>   
        <p>     </p>
        <label>
        Bitcoin Taproot address:  
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

       
        {/* <svg xmlns='http://www.w3.org/2000/svg' op='pixels' viewBox='0 0 12 12'><path d='M4 5h1v1h-1M8 5h1v1h-1' fill='#000000'/><path d='M2 0h1v1h-1M9 0h1v1h-1M1 1h1v1h-1M10 1h1v1h-1M2 2h1v1h-1M9 2h1v1h-1M3 3h1v1h-1M8 3h1v1h-1M0 9h1v1h-1M0 10h1v1h-1M2 9h1v1h-1M9 9h1v1h-1M11 9h1v1h-1M11 10h1v1h-1M3 10h1v1h-1M4 10h1v1h-1M7 10h1v1h-1M8 10h1v1h-1M1 11h1v1h-1M10 11h1v1h-1' fill='#FF33F0'/><path d='M2 4h1v1h-1M3 4h1v1h-1M4 4h1v1h-1M5 4h1v1h-1M6 4h1v1h-1M7 4h1v1h-1M8 4h1v1h-1M9 4h1v1h-1M9 5h1v1h-1M10 5h1v1h-1M10 6h1v1h-1M9 6h1v1h-1M8 6h1v1h-1M7 6h1v1h-1M6 6h1v1h-1M5 6h1v1h-1M4 6h1v1h-1M3 6h1v1h-1M2 6h1v1h-1M1 6h1v1h-1M0 6h1v1h-1M0 7h1v1h-1M0 8h1v1h-1M1 5h1v1h-1M2 5h1v1h-1M2 7h1v1h-1M3 7h1v1h-1M3 8h1v1h-1M2 8h1v1h-1M4 8h1v1h-1M5 8h1v1h-1M6 8h1v1h-1M7 8h1v1h-1M8 8h1v1h-1M9 8h1v1h-1M9 7h1v1h-1M8 7h1v1h-1M5 5h1v1h-1M6 5h1v1h-1M11 6h1v1h-1M11 7h1v1h-1M11 8h1v1h-1' fill='#009EFF'/><path d='M3 5h1v1h-1M7 5h1v1h-1M4 7h1v1h-1M5 7h1v1h-1M6 7h1v1h-1M7 7h1v1h-1' fill='#FFFFFF'/></svg> */}
      </div>

    );
  };