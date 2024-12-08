module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "@components": "./src/components",
          "@actions": "./src/redux/actions",
          "@reducers": "./src/redux/reducers",
          "@store": "./src/redux/store",
          "@interfaces": "./src/interfaces",
          "@hooks": "./src/hooks",
          "@enums": "./src/enums",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
