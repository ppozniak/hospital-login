module.exports = {
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.svg$": "<rootDir>/__mocks__/svgrMock.js",
  },
  setupFiles: ["<rootDir>/jest.init.js"],
};
