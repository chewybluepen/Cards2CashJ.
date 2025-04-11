// next.config.js (or next.config.mjs if you prefer ESM)
let userConfig = undefined;

try {
  // Try to import the ESM version of your user config
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // Fallback: Try to import the CommonJS version of your user config
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // If both imports fail, log a warning and continue with default configuration
    console.warn("No user configuration file found. Proceeding with default configuration.");
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// If a user configuration was found, merge it into our default config
if (userConfig) {
  // Use the "default" export for ESM imports; otherwise use the imported module directly.
  const config = userConfig.default || userConfig;
  for (const key in config) {
    if (typeof nextConfig[key] === "object" && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

export default nextConfig;
