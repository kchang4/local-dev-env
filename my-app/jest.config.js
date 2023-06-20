const config = {
  rootDir: process.cwd(),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: [],
  testEnvironment: "jsdom",
  transform: {
    ".*\\.(tsx?|jsx?)$": [
      "@swc/jest",
      {
        jsc: {
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
};

export default config;
