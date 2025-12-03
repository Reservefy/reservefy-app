const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Required for expo-router + src/app directory
config.resolver.unstable_enablePackageExports = true;

module.exports = withNativeWind(config, { input: './src/styles/globals.css' });
