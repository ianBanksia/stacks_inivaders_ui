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
  import { useAccount } from '@micro-stacks/react';
  import { useState } from 'react';  
  import { useOpenContractCall } from '@micro-stacks/react';  

  import {
    makeStandardFungiblePostCondition,
    makeContractFungiblePostCondition,
    createAssetInfo,
    FungibleConditionCode,
    makeStandardSTXPostCondition } from 'micro-stacks/transactions';

// Mint Stacks Invaders SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ.stacks-invaders-v0
export const MintInvaders = () => {
    const { openContractCall, isRequestPending } = useOpenContractCall();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState(null);
   
// $ROO
const roo_token = createAssetInfo(
  'SP2C1WREHGM75C7TGFAEJPFKTFTEGZKF6DFT6E2GE',
  'kangaroo',
  'kangaroo'
)

    const functionArgs = [
      uintCV(1234),
      intCV(-234),
      bufferCV(utf8ToBytes('hello, world')),
      stringAsciiCV('hey-ascii'),
      stringUtf8CV('hey-utf8'),
      standardPrincipalCV('SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ'),
      trueCV(),
    ];
   
    const handleOpenContractCall = async () => {

      const postConditions = [ makeStandardSTXPostCondition(
        stxAddress!,
        FungibleConditionCode.LessEqual,
        '5000000'
      ),
    ]; 

      await openContractCall({
        contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
        contractName: 'stacks-invaders-v0',
        functionName: 'claim',
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
        <button 
              style={{ background: "green" }}
        onClick={() => handleOpenContractCall()}>
          {isRequestPending ? 'request pending...' : 'MINT STACKS INVADERS'}
        </button>
      </div>
    );
  };