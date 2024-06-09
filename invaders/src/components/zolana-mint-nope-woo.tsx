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
export const ZolanaMintNopeWoo = () => {
    const { openContractCall, isRequestPending } = useOpenContractCall();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState(null);
   
    const functionArgs = [
      uintCV(1234),
      intCV(-234),
      bufferCV(utf8ToBytes('hello, world')),
      stringAsciiCV('hey-ascii'),
      stringUtf8CV('hey-utf8'),
      standardPrincipalCV('SP18MTB6VXR499WNTDDWDK2Q1KG960ABY8VJB37ZR'),
      trueCV(),
    ];

    // $WELSH
    const welsh_token = createAssetInfo(
      'SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ',
      'nope',
      'nope'
    )         

    const handleOpenContractCall = async () => {
      const postConditions = [ makeStandardFungiblePostCondition(
        stxAddress!,
        FungibleConditionCode.Equal,
        '50000000000000',
        welsh_token
      ),
    ]; 
      await openContractCall({
        contractAddress: 'SP18MTB6VXR499WNTDDWDK2Q1KG960ABY8VJB37ZR',
        contractName: 'zolana-node2',
        functionName: 'mint_nothing_1000',
        functionArgs: [],
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
    return (
      <div>
        {response && (
          <pre>
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
        )}
        <button onClick={() => handleOpenContractCall()}>
          {isRequestPending ? 'request pending...' : 'Mint WOO Nothing'}
        </button>
      </div>
    );
  };