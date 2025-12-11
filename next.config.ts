import type { NextConfig } from 'next';
import type { Configuration } from 'webpack'; 

const nextConfig: NextConfig = {
  
  webpack: (config: Configuration, options) => {
    const { isServer } = options;
    
    config.resolve.alias = {
        ...config.resolve.alias,
        '@react-native-async-storage/async-storage': false,
    };

    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        '@walletconnect/universal-provider',
        '@walletconnect/ethereum-provider',
        'pino', 
        'thread-stream', 
      ];
    }

    return config;
  },
};

export default nextConfig;
