# eslint-config-yscope

This repository contains ESLint configurations for various JavaScript environments under the `yscope` namespace. Our configurations are designed to enforce a consistent coding style and catch common bugs, making your codebase more maintainable and error-free.

## Installation

To get started with `eslint-config-yscope`, you can install the package:

```shell
npm install --save-dev eslint-config-yscope
# or
yarn add --dev eslint-config-yscope
```

### For Older Node.js Versions

If you are using `npm` version >= 3 or < 7, you need to install the `peerDependencies` specified in https://github.com/y-scope/eslint-config-yscope/blob/e0dc97bd6f738b06ee692bd52f0fceb6996c1625/package.json#L14-L26

Alternatively, you can upgrade your `npm` to the latest version compatible with your Node.js version.
- Node.js verions below v16: `npm i -g npm@9`
- Node.js v16 or above: `npm i -g npm@latest`

## Usage

After installation, you can use one of the configurations by adding it to the `extends` section in your `.eslintrc` (or `.eslintrc.js`, `.eslintrc.json`, etc.) file, or in an attribute named `eslintConfig` in your `package.json` file.

### ESLint config example

```json
{
  "extends": ["yscope/common"]
}
```

### Available Configurations

The available configs are:

- `yscope/common`: A general ESLint configuration suitable for a wide range of JavaScript projects.
- `yscope/react`: Tailored ESLint configuration for React applications.
- `yscope/meteor`: A specialized ESLint configuration for Meteor projects.
- `yscope/typescipt`: Designed specifically for TypeScript applications.
- `yscope/jest`: A Jest-specific ESLint configuration intended to override other configurations for Jest test files.

### Jest-Specific Configuration

The Jest configuration is **not standalone** and should be used alongside other configurations. It is intended to
override rules for Jest test files, so it should appear *last* in your `overrides` array.

#### Example Usage

If your project uses Jest, you can add an override for your test files as follows:

```json5
{
  "overrides": [
    // ...
    {
      "files": ["test/**/*"],
      "extends": ["yscope/jest"]
    }
  ]
}
```

### For TypeScript Configuration

TypeScript-related dependencies are not automatically installed because not every configuration requires them.
Before you can use this configuration, you need to install the dependencies manually.

```shell
npm install --save-dev eslint-import-resolver-typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Then in your ESLint configuration:

```json
{
  "extends": [
    "yscope/common",
    "yscope/typescript"
  ]
}
```

## Customization

Each configuration can be further customized and extended as per your project's needs. You can override specific rules by adding them to your ESLint configuration file.

## Contributing

We welcome contributions to the `eslint-config-yscope`! If you have suggestions or improvements, feel free to open an issue or a pull request.

## License

This project is licensed under Apache License 2.0. Please see the [LICENSE](https://github.com/y-scope/eslint-config-yscope/blob/main/LICENSE) file for more details.
