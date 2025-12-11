// ... (in your next.config.ts)

  webpack: (config: Configuration, options) => {
    const { isServer } = options;
    
    // 1. Ensure 'resolve' object exists on the configuration
    config.resolve = config.resolve ?? {};

    // 2. Safely assign to 'alias', ensuring alias itself exists first
    // Fix: 'config.resolve' is possibly 'undefined'
    config.resolve.alias = {
        // Use nullish coalescing (?? {}) to safely spread existing aliases
        ...(config.resolve.alias ?? {}), 
        '@react-native-async-storage/async-storage': false, 
    };

    // 3. Your existing server-side externals logic
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        // ... (your externals list) ...
      ];
    }

    return config;
  },
// ...
