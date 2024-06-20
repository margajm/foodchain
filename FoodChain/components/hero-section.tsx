"use client"

import Link from "next/link";
import { Button } from "./ui/button"

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
import { useConnectedWallets } from "thirdweb/react";

const walletsSetup = [
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

export default function HeroSection() {

  const router = useRouter();
  const  wallets  = useConnectedWallets();

  const handleConnect = () => {
    // Handle the disconnect event here
    console.log("Wallet Connected");
    router.push('/marketplace'); // Redirect to the login page after 3 seconds
  };    


  return (
    <>
      <main className="max-w-7xl mx-4 lg:mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-green-300 via-green-100 to-green-200 lg:pt-[200px] pb-[100px] lg:pb-[150px] px-4 rounded-2xl shadow-2xl">
        <div className="space-y-6 mx-12">
          <h1 className="text-4xl font-bold text-gray-800">SHARED AND DONATE FOOD IN YOUR COMMUNITY</h1>
          <p className="text-lg text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris nunc
          </p>
          <div className="lg:space-x-4 text-center items-center">
            <Link href="/marketplace" >
              <Button className="bg-pink-500 text-white h-12 rounded-xl mb-2">MARKETPLACE</Button>
            </Link>

            {!(wallets.length>0) && (
                <ConnectButton
                  client={thirdwebClient}
                  wallets={walletsSetup}
                  theme={"light"}
                  connectButton={{ label: "Join Now" }}
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
            )}
          </div>

        </div>
        <div className="relative">
          <video className="w-full h-full rounded-lg shadow-lg" autoPlay muted playsInline loop>
            <source src="/BuyIngredients.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>    
    </>
  )
}

