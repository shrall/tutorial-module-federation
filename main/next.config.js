// next.config.js
// either from default
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "parento",
        remotes: {
          childo: `childo@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./Button": "./src/components/ui/button.tsx",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
