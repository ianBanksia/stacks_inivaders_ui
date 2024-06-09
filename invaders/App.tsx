import reactLogo from './assets/react.svg';
import stacksInvadersLogo from './assets/stacks-invaders-logo.png';
import rooLogo from './assets/roo_logo.png';
import { useAccount } from '@micro-stacks/react';
import { useState } from 'react';

import './App.css';

import * as MicroStacks from '@micro-stacks/react';
import { WalletConnectButton } from './components/wallet-connect-button';
import { UserCard } from './components/user-card';
import { Logo } from './components/ustx-logo';
import { ZolanaOn } from './components/zolana-on';
import { ZolanaOff } from './components/zolana-off';
import { ZolanaCensor } from './components/zolana-censor';
import { ZolanaWhitelist } from './components/zolana-whitelist';
import { ZolanaMintLeo } from './components/zolana-mint-leo';
import { ZolanaMintWelsh } from './components/zolana-mint-welsh';
import { Spacer } from './components/spacer';
// ZOLANA ON

// AUTHORISE USER

// CENSOR USER

// MINT USING WELSH

// MINT USING LEO

// TRANSFER TO NEW USER

//Page content
function Contents() {
  return (
    <>
        <div className="wrapper">
        <UserCard />
        <div className={'row'}>
        <div className='column'>
          <div className='blue-column'>
          <p
          style={{
            display: 'block',
            marginTop: '10px',
          }}
        >
         Connect your wallet to start using ZOLANA.
        </p>          </div>
        </div>
        <div className='column'>
          <div className='green-column'>
          <WalletConnectButton />
          </div>
        </div>
      </div>        

        <h1> $ROO Community Project #1: ZOLANA</h1>

      <div className={'logos'}>
        <a
          href="https://www.roo-stx.com"
          target="_blank"
          className={'roo-logo'}
        >
          <img
            src={rooLogo}
            className="logo ROO"
            alt="$ROO logo"
          />
        </a>
        <a
          href="https://half-badger-159.notion.site/ZOLANA-c5a9d710f8c6468ea2ec87a36076c083?pvs=74"
          target="_blank"
        >
          <img
            src={stacksInvadersLogo}
            className="logo zolana"
            alt="ZOLANA logo"
          />
        </a>
      </div>
      <p className="read-the-docs">
        This is a community built, based, and mantained website. Please click on the ZOLANA logo, read the terms and conditions, and understand the risks before using this website.
      </p>   
      <br />
      <div className={'row'}>
        <div className='column'>
          <div className='blue-column'>
          <ZolanaOn />
        </div>
        </div>
        <div className='column'>
          <div className='green-column'>
          <ZolanaOff />
          </div>
        </div>
        <div className='column'>
          <div className='green-column'>
          <ZolanaMintLeo />    
          </div>
        </div>    
        <div className='column'>
          <div className='green-column'>
          <ZolanaMintWelsh />                       
          </div>
        </div>          
        <div className='column'>
          <div className='green-column'>
          <ZolanaWhitelist />
          </div>
        </div>
        <div className='column'>
          <div className='green-column'>
          <ZolanaCensor />    
          </div>
        </div>                   
      </div>
      <br />
        


      </div>
    </>
  );
};

export default function App() {
  return (
    <MicroStacks.ClientProvider
      appName={'ZOLANA'}
      appIconUrl={zolanaLogo}
    >
      <Contents />
    </MicroStacks.ClientProvider>
  );
}