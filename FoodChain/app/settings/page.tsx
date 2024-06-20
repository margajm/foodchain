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
import HeaderComponent from "@/components/header";


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
    <div className="min-h-screen flex flex-col">
      <HeaderComponent />

      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="grid gap-4">
          <h1>Settings</h1>
        </div>
      </div>
      {/* <footer className="sticky bottom-0 flex h-16 w-full items-center justify-center bg-gray-200 shadow dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 FoodChain All rights reserved.</p>
      </footer> */}
    </div>
  );
}
