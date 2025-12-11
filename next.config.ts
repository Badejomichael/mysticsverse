import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  // ... (any other simple config properties you have)

  webpack: (config: Configuration, options) => {
    const { isServer } = options;
    
    // Safety checks and MetaMask alias fix
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
        ...(config.resolve.alias ?? {}), 
        '@react-native-async-storage/async-storage': false, 
    };

    // Server externals logic
    if (isServer) {
      // Fix: Assert that the value being spread is a string array, or an empty array
config.externals = [
  // Assert 'config.externals' is a string array (or similar array type) before spreading
  ...((config.externals as string[] | undefined) || []), 
  
  '@walletconnect/universal-provider',
  '@walletconnect/ethereum-provider',
  'pino', 
  'thread-stream', 
];
    }
    return config;
  } // <-- NO COMMA HERE IF 'webpack' IS THE LAST PROPERTY
};

export default nextConfig;
