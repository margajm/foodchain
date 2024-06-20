"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { thirdwebClient } from "../../utils/thirdweb";

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

export default function Marketplace() {

  
  return (
    <div className="flex items-center justify-center h-screen p-2">

      <h1>Marketplace</h1>

    </div>
  );
}
