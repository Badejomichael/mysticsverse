import type { NextConfig } from 'next';
import type { Configuration } from 'webpack'; // 1. Import Webpack Configuration type

const nextConfig: NextConfig = {
  // ... (your existing config)
  
  // turbopack: {}, // (Optional: You can remove this now since you explicitly use --webpack)

  // 2. Add explicit types to the webpack function parameters
  webpack: (config: Configuration, options) => {
    const { isServer } = options;
    
    // 3. Fix the MetaMask SDK module not found warning
    // This tells webpack to resolve the React Native-specific dependency to nothing (false)
    config.resolve.alias = {
        ...config.resolve.alias,
        '@react-native-async-storage/async-storage': false,
    };

    // Your existing server-side externals logic (if needed for packages like pino/thread-stream)
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
