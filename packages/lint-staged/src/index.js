module.exports = {
  "*.{js,ts,tsx}": ["yarn run fix:eslint", "yarn run fix:prettier"],
  "*.{md,json,yml}": ["yarn run fix:prettier"],
  "package.json": [
    "yarn run lint:npm-package-json",
    "yarn run fix:sort-package-json",
    "yarn run fix:prettier",
  ],
};
