import stacksInvadersLogo from './assets/stacks-invaders-logo.png';
import rooLogo from './assets/roo_logo.png';
import stacksLogo from './assets/stacksLogo.png';
import bitcoinLogo from './assets/bitcoinLogo.png';
import stacksInvadersTitle from './assets/logoTitle.png';
import stacksInvadersSample from './assets/animatedStacksInvaders.gif';

import inv11Image from './assets/invaders/unit11.svg';

import { useAccount } from '@micro-stacks/react';
import { useState } from 'react';

import './App.css';

import * as MicroStacks from '@micro-stacks/react';
import { WalletConnectButton } from './components/wallet-connect-button';
import { UserCard } from './components/user-card';
import { Logo } from './components/ustx-logo';
import { InvadersPreview } from './components/invaders-image';
import { InvadersPreviewBlock } from './components/invaders-image-block-new';
import { InvadersPreviewBlockJack } from './components/invaders-image-block-jack';
import { InvadersTokenBlock } from './components/invaders-token-block';
import { InvadersPreviewToken } from './components/invaders-image-token';
import { InvadersPreviewCarousel } from './components/invaders-image-carousel';
import { MintInvaders } from './components/mint-invaders';
import { MintInvadersGold } from './components/mint-invaders-gold';
import { MintInvadersSilver } from './components/mint-invaders-silver';
import { MintInvadersLotto } from './components/mint-invaders-lotto';


//Page content
function Contents() {
  return (
    <>
        <div className="wrapper"   >
        {/* style={{ backgroundImage: <img
            src={stacksInvadersBackground}
            className="logo ROO"
            alt="$ROO logo"
          /> }} */}
        <div className={'row'}>
        <div className='column'>
          <div className='blue-column'>
          <p
          style={{
            display: 'block',
            marginTop: '10px',
          }} className="read-the-docs-white"
        >
         Connect your wallet to mint your Stacks Invaders.
        </p>          </div>
        </div>
        <div className='column'>
          <div className='green-column'>
          <WalletConnectButton />
          </div>
        </div>
      </div>       
 
      <UserCard />

      <div className={'logos'}>
      <img
            src={stacksInvadersLogo}
            className="logo stacks invaders"
            alt="Stacks Invaders"
          />
        {/* <p className="read-the-docs-white-large">
      STACKS INVADERS
      </p>   */}
      <img
            src={stacksInvadersTitle}
            className="logo stacks invaders"
            alt="Stacks Invaders"
          />
        <a
          href="https://github.com/ianBanksia/stacks-invaders/blob/main/README.md"
          target="_blank"
        >
          <img
            src={stacksInvadersLogo}
            className="logo stacks invaders"
            alt="Stacks Invaders"
          />
        </a>
      </div>
      <img
            src={stacksInvadersSample} 
            className="logo ROO"
            alt="$ROO logo"
          />      
       {/* <div className={'row'}>
         <div className='column'>
        <div className='blue-column'>
        <p
          style={{
            display: 'block',
            marginTop: '10px',
          }} className="read-the-docs-black"
        >
        <InvadersPreviewBlock />
        </p>
        </div>   
        </div>   
        <div className='column'>
        <div className='blue-column'>
        <InvadersPreviewBlockJack />
        </div>   
        </div>   
        <div className='column'>
        <div className='blue-column'>
        <InvadersPreviewToken />
        </div>   
        </div>                    
      </div>          */}
      <br />     
      <div id="imageReceiver" className="read-the-docs">
      </div>       
      <br />     
      <p className="read-the-docs">
       <b>*** MINT IS CLOSE ***</b>
      </p>          
      <br />
      <a
          href="https://stacks.gamma.io/collections/stacks-invaders"
          target="_blank"
        >        
      <p className="read-the-docs">
      <b>*** Trade is live at Gamma and Tradeport ***</b>
      </p>  
      </a>        
      <br />     
      <p className="read-the-docs">
      Mint is completed, but the project is just getting started.
      </p>                              
      <br />
      <a
          href="https://app.console.xyz/c/roo"
          target="_blank"
        >        
      <p className="read-the-docs">
      <b>***         Join us in our Console Community to know more about the next steps      ***</b>
      </p>  
      </a>         
      <br />
      
      <div className='blue-column'>
      <img
            src={inv11Image} 
            className="logo ROO"
            alt="$ROO logo"
          />

      <InvadersPreviewCarousel />

      </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <MicroStacks.ClientProvider
      appName={'StacksInvaders'}
      appIconUrl={stacksInvadersLogo}
    >
      <Contents />
    </MicroStacks.ClientProvider>
  );
}