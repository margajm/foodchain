"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { thirdwebClient } from "../utils/thirdweb";

import {
  ThirdwebProvider,
  ConnectButton,
} from "thirdweb/react";

import { baseSepolia, defineChain } from "thirdweb/chains";

import {
  createWallet,
  walletConnect,
  inAppWallet,
} from "thirdweb/wallets";

import { useRouter } from 'next/navigation';

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet", {
    walletConfig: {
      options: "smartWalletOnly",
    },    
  }),
  inAppWallet({
    auth: {
      options: [
        "email",
        "google",
        "apple",
        "facebook",
        "phone",
      ],
    },
  }),
];

export default function Home() {

  const [showLogo, setShowLogo] = useState(false);
  const router = useRouter();

  const handleConnect = () => {
    // Handle the disconnect event here
    console.log("Wallet Connected");
    router.push('/marketplace'); // Redirect to the login page after 3 seconds
  };    

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
      console.log("Show Logo");
    }, 6000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);  
  
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#c5a30a] via-[#c5a30a] to-[#f2c810] p-2">

      {!showLogo && (
        <div className="h-max text-center items-center justify-center">
          <div>
          <Image src="/logo-horizontal-transparent-version-2.png" alt="FoodChain Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '90%', height: 'auto', margin: 'auto'}} />

          </div>
          <Image src="/foochain-video01.gif" alt="Loading..." 
            width={0}
            height={0}
            style={{ width: '80%', height: 'auto', margin: 'auto'}}
            className="rounded-xl shadow-xl ${showLogo ? 'animate-vanish' : ''}"/>

        </div>
      )}

      {showLogo && (
        <div className="absolute flex flex-col items-center justify-center animate-slide-up">

<div className="space-y-4 text-center">
          <div>
          <Image src="/logo-horizontal-transparent-version-2.png" alt="FoodChain Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', marginBottom: '25px'}} />

          </div>
  
          <ConnectButton
            client={thirdwebClient}
            wallets={wallets}
            theme={"light"}
            connectButton={{ label: "Start" }}
            connectModal={{
              size: "compact",
              title: "Food Chain",
              titleIcon:
                "https://bafybeib4ousmbm2wpym66qikmvoyfu5usqnzmkvkcgl2w2xr425gzcchji.ipfs.w3s.link/foodchain-logo-only-circle.png",
              showThirdwebBranding: false,
            }}
            onConnect={handleConnect}
            chain={defineChain(baseSepolia)}
          />        
        </div>
        </div>
      )}

    </div>
  );
}
