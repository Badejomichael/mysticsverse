"use client";

import * as React from 'react';
import {
  getDefaultConfig,
  RainbowKitProvider, 
  darkTheme,
} from '@rainbow-me/rainbowkit';

import { WagmiProvider } from 'wagmi';
import { defineChain } from 'viem'; 

import {
  mainnet,
  polygon,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const monadMainnet = defineChain({
  id: 10143,
  name: 'Monad Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.monad.xyz/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Explorer',
      url: 'https://explorer.testnet.monad.xyz',
    },
  },
  testnet: true,
});


const config = getDefaultConfig({
  appName: 'Mystics App',
  projectId: projectId!,
  chains: [mainnet, polygon, monadMainnet], 
  ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {mounted && children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}