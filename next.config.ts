/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... (your existing config)
  webpack: (config, { isServer }) => {
    // Only apply this to the server-side build where this package is likely used
    if (isServer) {
      config.externals = [
        ...config.externals,
        // Exclude the problematic logging/stream transport package from the server bundle
        // This is often required for dependencies that use Node.js-specific modules like 'worker_threads'
        '@walletconnect/universal-provider',
        '@walletconnect/ethereum-provider',
        'pino', // Exclude pino itself
        'thread-stream', // Exclude the direct cause of the errors
      ];
    }
    return config;
  },
  // If the above doesn't work, try disabling Turbopack temporarily
  // Note: Turbopack is the default in Next.js 14+ for development, 
  // but if you explicitly enabled it for production, you might need to check your setup.
};

module.exports = nextConfig;
