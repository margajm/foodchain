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
import HeaderComponent from "@/components/header";
import HeroSection from "@/components/hero-section";

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
    }, 5500);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);  
  
  return (
    <div className="items-center justify-center h-screen p-2">

      {!showLogo && (
        <div className="h-max min-w-max text-center items-center justify-center grid grid-cols-1 pt-6">

          <Image src="/logo-horizontal-transparent-version-2.png" alt="FoodChain Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '60%', height: 'auto', margin: 'auto'}} />

        
          <Image src="/foochain-video01.gif" alt="Loading..." 
            width={0}
            height={0}
            style={{ width: '80%', height: 'auto', margin: 'auto'}}
            className="rounded-xl shadow-xl ${showLogo ? 'animate-vanish' : ''} flex lg:hidden"/>

          <Image src="/foochain-video02.gif" alt="Loading..." 
            width={0}
            height={0}
            style={{ width: '80%', height: 'auto', margin: 'auto'}}
            className="rounded-xl shadow-xl ${showLogo ? 'animate-vanish' : ''} hidden lg:flex"/>

        </div>
      )}

      {showLogo && (
        <>
          <div  className="">
            <HeaderComponent />
          </div>
          <div className="animate-slide-up">
            <HeroSection />
          </div>
        </>
      )}

    </div>
  );
}
