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
export const ZolanaOffWoo = () => {
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

// $WOO
const roo_token = createAssetInfo(
  'SP2ZNGJ85ENDY6QRHQ5P2D4FXKGZWCKTB2T0Z55KS',
  'dme021-wooo-token',
  'dme021-wooo-token'
)

    const handleOpenContractCall = async () => {

        const postConditions = [ makeStandardFungiblePostCondition(
          stxAddress!,
          FungibleConditionCode.Equal,
          '1000000000',
          roo_token
        ),
      ]; 
      await openContractCall({
        contractAddress: 'SP18MTB6VXR499WNTDDWDK2Q1KG960ABY8VJB37ZR',
        contractName: 'zolana-node2',
        functionName: 'zolana_off',
        functionArgs: [],
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
      <div>
        {response && (
          <pre>
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
        )}
        <button onClick={() => handleOpenContractCall()}>
          {isRequestPending ? 'request pending...' : 'Set ZOL OFF - WOO'}
        </button>
      </div>
    );
  };