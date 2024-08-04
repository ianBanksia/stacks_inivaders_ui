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
export const MintInvadersLotto = () => {
    const { openContractCall, isRequestPending } = useOpenContractCall();
    const { stxAddress } = useAccount();
    const [response, setResponse] = useState(null);
    const [inputValue, setInputValue] = useState("");   
    const [inputValuePrice, setInputValuePrice] = useState("");   

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
      const inputStx = inputValue || '20';
      const stxMax = inputStx.concat('000000');
      const postConditions = [ makeStandardSTXPostCondition(
        stxAddress!,
        FungibleConditionCode.LessEqual,
        '2000000'
      ),
    ]; 
    const tokenID = inputValue;
    const functionArgsCall = [
      uintCV(tokenID)
    ];
      await openContractCall({
        contractAddress: 'SPV8C2N59MA417HYQNG6372GCV0SEQE01EV4Z1RQ',
        contractName: 'stacks-invaders-gss-v0',
        functionName: 'upgrade-lotto-trait',
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
    return (
      <div>
        {response && (
          <pre>
            <code>{JSON.stringify(response, null, 2)}</code>
          </pre>
        )}
          <p
          style={{
            display: 'block',
            marginTop: '10px',
          }} className="read-the-docs-black"
        >        
        <button 
              style={{ background: "purple" }}
        onClick={() => handleOpenContractCall()}>
          {isRequestPending ? 'request pending...' : 'LOTTO TICKET'}
        </button> </p>
        <p>     </p>
        <label>
        Token ID:  
        <input 
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        </label>              
      </div>
    );
  };