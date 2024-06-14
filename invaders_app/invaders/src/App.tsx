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
import { InvadersPreviewBlock } from './components/invaders-image-block';
import { InvadersPreviewToken } from './components/invaders-image-token';
import { InvadersPreviewCarousel } from './components/invaders-image-carousel';
import { MintInvaders } from './components/mint-invaders';

import { ZolanaStatus } from './components/zolana-status';

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
      <div className={'row'}>
         <div className='column'>
        <div className='blue-column'>
        <ZolanaStatus />
        </div>   
        </div>   
        <div className='column'>
        <div className='blue-column'>
        <InvadersPreview /> 
        </div>   
        </div>  
        <div className='column'>
        <div className='blue-column'>
        <InvadersPreviewToken /> 
        </div>   
        </div>          
        <div className='column'>
        <div className='blue-column'>
        <InvadersPreviewBlock />
        </div>   
        </div>                  
        <div className='column'>
          <div className='blue-column'>
          <MintInvaders />
        </div>  
        </div>    
      </div>
      <br />     
      <div id="imageReceiver" className="read-the-docs">
      </div>       
      <br />     
      <p className="read-the-docs">
        This is a community built, based, and mantained website. Please click on the Stacks Invaders logo, read the terms and conditions, and understand the risks before using this website.
      </p>  
      <p className="read-the-docs">
        PRICE: Starts at 1 STX and going up until ~10 STX - Post Conditions may have a higher amount, but ony the current price will be charged.
      </p>     
      <p className="read-the-docs">
        INVADERS: You can click on the options above to download the previews files directly from the Smart Contract. These are SVG images with trasnparent background, a block explorer will go online later in the week.
      </p>           
      <p className="read-the-docs">
        $ROO Holders with more than 10k have one free mint - No garantees on the mint, as there's potential for block competition.
      </p>           
      <p className="read-the-docs">
       <b>*** THERE IS ONLY ONE STACKS INVADER PER BLOCK -- COMPETITION MAY TAKE PLACE FOR THE BLOCK, AND TRANSACTIONS MAY FAIL ***</b>
      </p> 
      <p className="read-the-docs">
        We have no control over which transactions gets in first, nor a way to refund any STX used as trx fee. Please go easy and be mindfull: there's no advantage in having more than one trx per block.
      </p>                     
      <br />
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