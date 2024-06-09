import {
    uintCV,
    intCV,
    bufferCV,
    stringAsciiCV,
    stringUtf8CV,
    standardPrincipalCV,
    trueCV,
  } from 'micro-stacks/clarity';
  import { utf8ToBytes } from 'micro-stacks/common';
  import {
    makeStandardFungiblePostCondition,
    makeContractFungiblePostCondition,
    createAssetInfo,
    FungibleConditionCode,
    makeStandardSTXPostCondition } from 'micro-stacks/transactions';
  import { useAccount } from '@micro-stacks/react';
  import { useState } from 'react';  
  import { useOpenContractCall } from '@micro-stacks/react';  
// ZOLANA ON
export const ZolanaCensor = () => {
    const { openContractCall, isRequestPending } = useOpenContractCall();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const wallet1 = document.getElementById("wallet-id");
    //const


    // $ROO
    const roo_token = createAssetInfo(
      'SP2C1WREHGM75C7TGFAEJPFKTFTEGZKF6DFT6E2GE',
      'kangaroo',
      'kangaroo'
    )       
    
    const handleOpenContractCall = async () => {
      console.log("wallet", wallet1);
      console.log("wallet", inputValue);

      const postConditions = [ makeStandardFungiblePostCondition(
        stxAddress!,
        FungibleConditionCode.Equal,
        '1000000000',
        roo_token
      ),
    ]; 
    let Iwallet = 'SP2C1WREHGM75C7TGFAEJPFKTFTEGZKF6DFT6E2GE' ; //DUMMY VALUE
    Iwallet = inputValue;
    const functionArgs = [
      standardPrincipalCV(Iwallet)
    ];
      await openContractCall({
        contractAddress: 'SP18MTB6VXR499WNTDDWDK2Q1KG960ABY8VJB37ZR',
        contractName: 'zolana',
        functionName: 'censor_user',
        functionArgs,
        postConditions,
       // attachment: '0x',
        onFinish: async data => {
          console.log('finished contract call!', data);
          //setResponse(data);
        },
        onCancel: () => {
          console.log('popup closed!');
        },
      });
    };
    return (
      <div className="read-the-docs">
        {response && (
          <pre>
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
        )}
        <button onClick={() => handleOpenContractCall()}>
          {isRequestPending ? 'request pending...' : 'Censor User'}
        </button>   
        <br />
     
      <label>
        Wallet ID:
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>

      </div>
    );
  };