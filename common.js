/* eslint-disable sort-keys, max-lines, no-magic-numbers */
module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "no-autofix",
        "@stylistic/js",
        "@stylistic/plus",
        "simple-import-sort",
        "import-newlines",
        "import",
        "jsdoc",
    ],
    settings: {
        jsdoc: {
            mode: "typescript",
            tagNamePreference: {
                returns: "return",
            },
        },
    },
    rules: {
        "accessor-pairs": [
            "error",
        ],
        "array-callback-return": [
            "error",
        ],
        "arrow-body-style": [
            "off",
        ],
        "block-scoped-var": [
            "error",
        ],
        "camelcase": [
            "error",
            {
                properties: "never",
                ignoreDestructuring: false,
                ignoreImports: false,
                ignoreGlobals: false,
            },
        ],
        "capitalized-comments": [
            "off",
        ],
        "class-methods-use-this": [
            "error",
        ],
        "complexity": [
            "error",
        ],
        "consistent-return": [
            "error",
        ],
        "consistent-this": [
            "error",
        ],
        "constructor-super": [
            "error",
        ],
        "curly": [
            "error",
            "all",
        ],
        "default-case": [
            "error",
        ],
        "default-case-last": [
            "error",
        ],
        "default-param-last": [
            "error",
        ],
        "dot-notation": [
            "error",
        ],
        "eqeqeq": [
            "error",
        ],
        "for-direction": [
            "error",
        ],
        "func-name-matching": [
            "error",
        ],
        "func-names": [
            "error",
            "as-needed",
        ],
        "func-style": [
            "warn",
            "expression",
        ],
        "getter-return": [
            "error",
        ],
        "grouped-accessor-pairs": [
            "error",
        ],
        "guard-for-in": [
            "error",
        ],
        "id-denylist": [
            "off",
        ],
        "id-length": [
            "off",
        ],
        "id-match": [
            "error",
        ],
        "init-declarations": [
            "off",
        ],
        "line-comment-position": [
            "error",
        ],
        "logical-assignment-operators": [
            "error",
        ],
        "max-classes-per-file": [
            "error",
        ],
        "max-depth": [
            "error",
        ],
        "max-lines": [
            "error",
        ],
        "max-lines-per-function": [
            "error",
            {
                max: 60,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        "max-nested-callbacks": [
            "error",
        ],
        "max-params": [
            "error",
            {
                max: 4,
            },
        ],
        "max-statements": [
            "error",
            {
                max: 20,
            },
        ],
        "multiline-comment-style": [
            "off",
        ],
        "new-cap": [
            "error",
        ],
        "no-alert": [
            "error",
        ],
        "no-array-constructor": [
            "error",
        ],
        "no-async-promise-executor": [
            "error",
        ],
        "no-await-in-loop": [
            "off",
        ],
        "no-bitwise": [
            "off",
        ],
        "no-caller": [
            "error",
        ],
        "no-case-declarations": [
            "error",
        ],
        "no-class-assign": [
            "error",
        ],
        "no-compare-neg-zero": [
            "error",
        ],
        "no-cond-assign": [
            "error",
        ],
        "no-const-assign": [
            "error",
        ],
        "no-constant-binary-expression": [
            "error",
        ],
        "no-constant-condition": [
            "error",
            {
                checkLoops: false,
            },
        ],
        "no-constructor-return": [
            "error",
        ],
        "no-continue": [
            "off",
        ],
        "no-control-regex": [
            "error",
        ],
        "no-debugger": [
            "error",
        ],
        "no-delete-var": [
            "error",
        ],
        "no-div-regex": [
            "error",
        ],
        "no-dupe-args": [
            "error",
        ],
        "no-dupe-class-members": [
            "error",
        ],
        "no-dupe-else-if": [
            "error",
        ],
        "no-dupe-keys": [
            "error",
        ],
        "no-duplicate-case": [
            "error",
        ],
        "no-duplicate-imports": [
            "error",
        ],
        "no-else-return": [
            "error",
        ],
        "no-empty": [
            "error",
        ],
        "no-empty-character-class": [
            "error",
        ],
        "no-empty-function": [
            "error",
            {
                allow: ["arrowFunctions"],
            },
        ],
        "no-empty-pattern": [
            "error",
        ],
        "no-empty-static-block": [
            "error",
        ],
        "no-eq-null": [
            "error",
        ],
        "no-eval": [
            "error",
        ],
        "no-ex-assign": [
            "error",
        ],
        "no-extend-native": [
            "error",
        ],
        "no-extra-bind": [
            "error",
        ],
        "no-extra-boolean-cast": [
            "error",
        ],
        "no-extra-label": [
            "error",
        ],
        "no-fallthrough": [
            "error",
        ],
        "no-func-assign": [
            "error",
        ],
        "no-global-assign": [
            "error",
        ],
        "no-implicit-coercion": [
            "error",
        ],
        "no-implicit-globals": [
            "error",
        ],
        "no-implied-eval": [
            "error",
        ],
        "no-import-assign": [
            "error",
        ],
        "no-inline-comments": [
            "error",
        ],
        "no-inner-declarations": [
            "error",
        ],
        "no-invalid-regexp": [
            "error",
        ],
        "no-invalid-this": [
            "off",
        ],
        "no-irregular-whitespace": [
            "error",
        ],
        "no-iterator": [
            "error",
        ],
        "no-label-var": [
            "error",
        ],
        "no-labels": [
            "error",
        ],
        "no-lone-blocks": [
            "error",
        ],
        "no-lonely-if": [
            "error",
        ],
        "no-loop-func": [
            "error",
        ],
        "no-loss-of-precision": [
            "error",
        ],
        "no-magic-numbers": [
            "error",
            {
                detectObjects: false,
                enforceConst: true,
                ignore: [
                    -1,
                    0,
                    1,
                    2,
                    3,
                    10,
                    100,
                ],
                ignoreArrayIndexes: true,
                ignoreClassFieldInitialValues: true,
                ignoreDefaultValues: true,
            },
        ],
        "no-misleading-character-class": [
            "error",
        ],
        "no-multi-assign": [
            "error",
        ],
        "no-multi-str": [
            "error",
        ],
        "no-negated-condition": [
            "off",
        ],
        "no-nested-ternary": [
            "error",
        ],
        "no-new": [
            "error",
        ],
        "no-new-func": [
            "error",
        ],
        "no-new-native-nonconstructor": [
            "error",
        ],
        "no-new-symbol": [
            "error",
        ],
        "no-new-wrappers": [
            "error",
        ],
        "no-nonoctal-decimal-escape": [
            "error",
        ],
        "no-obj-calls": [
            "error",
        ],
        "no-object-constructor": [
            "error",
        ],
        "no-octal": [
            "error",
        ],
        "no-octal-escape": [
            "error",
        ],
        "no-param-reassign": [
            "off",
        ],
        "no-plusplus": [
            "off",
        ],
        "no-promise-executor-return": [
            "error",
        ],
        "no-proto": [
            "error",
        ],
        "no-prototype-builtins": [
            "error",
        ],
        "no-redeclare": [
            "error",
        ],
        "no-regex-spaces": [
            "error",
        ],
        "no-restricted-exports": [
            "error",
        ],
        "no-restricted-globals": [
            "error",
        ],
        "no-restricted-imports": [
            "error",
        ],
        "no-restricted-properties": [
            "error",
        ],
        "no-restricted-syntax": [
            "error",
            {
                message: "Direct exporting of declarations is not allowed. " +
                    "Use export list or default exports instead.",
                selector: "ExportNamedDeclaration[declaration!=null]",
            },
        ],
        "no-return-assign": [
            "error",
        ],
        "no-script-url": [
            "error",
        ],
        "no-self-assign": [
            "error",
        ],
        "no-self-compare": [
            "error",
        ],
        "no-sequences": [
            "error",
        ],
        "no-setter-return": [
            "error",
        ],
        "no-shadow": [
            "error",
        ],
        "no-shadow-restricted-names": [
            "error",
        ],
        "no-sparse-arrays": [
            "error",
        ],
        "no-template-curly-in-string": [
            "error",
        ],
        "no-ternary": [
            "off",
        ],
        "no-this-before-super": [
            "error",
        ],
        "no-throw-literal": [
            "error",
        ],
        "no-undef": [
            "error",
        ],
        "no-undef-init": [
            "error",
        ],
        "no-undefined": [
            "error",
        ],
        "no-underscore-dangle": [
            "error",
            {
                allow: [
                    "_id",
                    "_malloc",
                ],
            },
        ],
        "no-unexpected-multiline": [
            "error",
        ],
        "no-unmodified-loop-condition": [
            "error",
        ],
        "no-unneeded-ternary": [
            "error",
        ],
        "no-unreachable": [
            "error",
        ],
        "no-unreachable-loop": [
            "error",
        ],
        "no-unsafe-finally": [
            "error",
        ],
        "no-unsafe-negation": [
            "error",
        ],
        "no-unsafe-optional-chaining": [
            "error",
        ],
        "no-unused-expressions": [
            "error",
        ],
        "no-unused-labels": [
            "error",
        ],
        "no-unused-private-class-members": [
            "error",
        ],
        "no-unused-vars": [
            "warn",
            {
                args: "none",
            },
        ],
        "no-use-before-define": [
            "error",
        ],
        "no-useless-backreference": [
            "error",
        ],
        "no-useless-call": [
            "error",
        ],
        "no-useless-catch": [
            "error",
        ],
        "no-useless-computed-key": [
            "error",
        ],
        "no-useless-concat": [
            "error",
        ],
        "no-useless-constructor": [
            "error",
        ],
        "no-useless-escape": [
            "error",
        ],
        "no-useless-rename": [
            "error",
        ],
        "no-useless-return": [
            "error",
        ],
        "no-var": [
            "error",
        ],
        "no-void": [
            "error",
        ],
        "no-warning-comments": [
            "warn",
            {
                location: "start",
                terms: [
                    "todo",
                    "fixme",
                ],
            },
        ],
        "no-with": [
            "error",
        ],
        "object-shorthand": [
            "error",
            "consistent",
        ],
        "one-var": [
            "error",
            {
                var: "never",
                let: "never",
                const: "never",
            },
        ],
        "operator-assignment": [
            "error",
        ],
        "prefer-arrow-callback": [
            "error",
        ],
        "prefer-const": [
            "error",
            {
                destructuring: "all",
                ignoreReadBeforeAssign: false,
            },
        ],
        "prefer-destructuring": [
            "error",
        ],
        "prefer-exponentiation-operator": [
            "error",
        ],
        "prefer-named-capture-group": [
            "off",
        ],
        "prefer-numeric-literals": [
            "error",
        ],
        "prefer-object-has-own": [
            "error",
        ],
        "prefer-object-spread": [
            "error",
        ],
        "prefer-promise-reject-errors": [
            "error",
        ],
        "prefer-regex-literals": [
            "error",
        ],
        "prefer-rest-params": [
            "error",
        ],
        "prefer-spread": [
            "error",
        ],
        "prefer-template": [
            "error",
        ],
        "radix": [
            "error",
        ],
        "require-atomic-updates": [
            "warn",
        ],
        "require-await": [
            "off",
        ],
        "require-unicode-regexp": [
            "off",
        ],
        "require-yield": [
            "error",
        ],
        "simple-import-sort/exports": [
            "warn",
        ],
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    [
                        "^meteor",
                        "^prop-types",
                        "^react",
                    ],
                    [
                        "^\\w",
                    ],
                    [
                        "^@",
                    ],
                    [
                        "^@mui/icons-material",
                    ],
                    [
                        "^/",
                    ],
                    [
                        "^[./]",
                    ],
                    [
                        "^\\\\u0000",
                    ],
                ],
            },
        ],
        "sort-imports": [
            "off",
        ],
        "sort-keys": [
            "warn",
            "asc",
            {
                allowLineSeparatedGroups: true,
                caseSensitive: true,
                minKeys: 5,
                natural: true,
            },
        ],
        "sort-vars": [
            "error",
        ],
        "strict": [
            "error",
        ],
        "symbol-description": [
            "error",
        ],
        "unicode-bom": [
            "error",
        ],
        "use-isnan": [
            "error",
        ],
        "valid-typeof": [
            "error",
        ],
        "vars-on-top": [
            "error",
        ],
        "yoda": [
            "error",
            "always",
        ],

        // deprecated by `@stylistic`
        "array-bracket-newline": [
            "off",
        ],
        "array-bracket-spacing": [
            "off",
        ],
        "array-element-newline": [
            "off",
        ],
        "arrow-parens": [
            "off",
            "always",
        ],
        "arrow-spacing": [
            "off",
        ],
        "block-spacing": [
            "off",
            "never",
        ],
        "brace-style": [
            "off",
        ],
        "comma-dangle": [
            "off",
        ],
        "comma-spacing": [
            "off",
        ],
        "comma-style": [
            "off",
        ],
        "computed-property-spacing": [
            "off",
        ],
        "dot-location": [
            "off",
        ],
        "eol-last": [
            "off",
        ],
        "func-call-spacing": [
            "off",
        ],
        "function-call-argument-newline": [
            "off",
        ],
        "function-paren-newline": [
            "off",
        ],
        "generator-star-spacing": [
            "off",
        ],
        "implicit-arrow-linebreak": [
            "off",
        ],
        "indent": [
            "off",
        ],
        "jsx-quotes": [
            "off",
        ],
        "key-spacing": [
            "off",
        ],
        "keyword-spacing": [
            "off",
        ],
        "linebreak-style": [
            "off",
        ],
        "lines-around-comment": [
            "off",
        ],
        "lines-between-class-members": [
            "off",
        ],
        "max-len": [
            "off",
        ],
        "max-statements-per-line": [
            "off",
        ],
        "multiline-ternary": [
            "off",
        ],
        "new-parens": [
            "off",
        ],
        "newline-per-chained-call": [
            "off",
        ],
        "no-confusing-arrow": [
            "off",
        ],
        "no-extra-parens": [
            "off",
        ],
        "no-extra-semi": [
            "off",
        ],
        "no-floating-decimal": [
            "off",
        ],
        "no-mixed-operators": [
            "off",
        ],
        "no-mixed-spaces-and-tabs": [
            "off",
        ],
        "no-multi-spaces": [
            "off",
        ],
        "no-multiple-empty-lines": [
            "off",
        ],
        "no-tabs": [
            "off",
        ],
        "no-trailing-spaces": [
            "off",
        ],
        "no-whitespace-before-property": [
            "off",
        ],
        "nonblock-statement-body-position": [
            "off",
        ],
        "object-curly-newline": [
            "off",
        ],
        "object-curly-spacing": [
            "off",
        ],
        "object-property-newline": [
            "off",
        ],
        "one-var-declaration-per-line": [
            "off",
        ],
        "operator-linebreak": [
            "off",
        ],
        "padded-blocks": [
            "off",
        ],
        "padding-line-between-statements": [
            "off",
        ],
        "quote-props": [
            "off",
        ],
        "quotes": [
            "off",
        ],
        "rest-spread-spacing": [
            "off",
        ],
        "semi": [
            "off",
        ],
        "semi-spacing": [
            "off",
        ],
        "semi-style": [
            "off",
        ],
        "space-before-blocks": [
            "off",
        ],
        "space-before-function-paren": [
            "off",
        ],
        "space-in-parens": [
            "off",
        ],
        "space-infix-ops": [
            "off",
        ],
        "space-unary-ops": [
            "off",
        ],
        "spaced-comment": [
            "off",
        ],
        "switch-colon-spacing": [
            "off",
        ],
        "template-curly-spacing": [
            "off",
        ],
        "template-tag-spacing": [
            "off",
        ],
        "wrap-iife": [
            "off",
        ],
        "wrap-regex": [
            "off",
        ],
        "yield-star-spacing": [
            "off",
        ],

        "@stylistic/js/array-bracket-newline": [
            "error",
            "consistent",
        ],
        "@stylistic/js/array-bracket-spacing": [
            "error",
            "never",
        ],
        "@stylistic/js/array-element-newline": [
            "error",
            {
                ArrayExpression: "always",
                ArrayPattern: {
                    minItems: 3,
                },
            },
        ],
        "@stylistic/js/arrow-parens": [
            "error",
        ],
        "@stylistic/js/arrow-spacing": [
            "error",
        ],
        "@stylistic/js/block-spacing": [
            "error",
        ],
        "@stylistic/js/brace-style": [
            "error",
            "1tbs",
            {
                allowSingleLine: true,
            },
        ],
        "@stylistic/js/comma-dangle": [
            "warn",
            {
                arrays: "always-multiline",
                exports: "always-multiline",
                functions: "only-multiline",
                imports: "always-multiline",
                objects: "always-multiline",
            },
        ],
        "@stylistic/js/comma-spacing": [
            "error",
        ],
        "@stylistic/js/comma-style": [
            "error",
        ],
        "@stylistic/js/computed-property-spacing": [
            "error",
        ],
        "@stylistic/js/dot-location": [
            "error",
            "property",
        ],
        "@stylistic/js/eol-last": [
            "error",
            "always",
        ],
        "@stylistic/js/func-call-spacing": [
            // The rule has been renamed to "@stylistic/js/function-call-spacing"
            "off",
        ],
        "@stylistic/js/function-call-argument-newline": [
            "error",
            "consistent",
        ],
        "@stylistic/js/function-call-spacing": [
            "error",
        ],
        "@stylistic/js/function-paren-newline": [
            "error",
            "multiline-arguments",
        ],
        "@stylistic/js/generator-star-spacing": [
            "error",
        ],
        "@stylistic/js/implicit-arrow-linebreak": [
            "error",
        ],
        "@stylistic/js/indent": [
            "error",
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: false,
                offsetTernaryExpressions: false,
                ignoreComments: false,
            },
        ],
        "@stylistic/js/jsx-quotes": [
            "error",
        ],
        "@stylistic/js/key-spacing": [
            "error",
            {
                afterColon: true,
            },
        ],
        "@stylistic/js/keyword-spacing": [
            "error",
        ],
        "@stylistic/js/linebreak-style": [
            "error",
            "unix",
        ],
        "@stylistic/js/lines-around-comment": [
            "error",
            {
                ignorePattern: "c8|Enum",
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                afterHashbangComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowClassStart: true,
                allowClassEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        "@stylistic/js/lines-between-class-members": [
            "error",
        ],
        "@stylistic/js/max-len": [
            "warn",
            {
                code: 100,
                tabWidth: 4,
                comments: 100,
                ignoreComments: false,
                ignoreTrailingComments: false,
                ignoreUrls: true,
                ignoreStrings: false,
                ignoreTemplateLiterals: false,
                ignoreRegExpLiterals: true,
            },
        ],
        "@stylistic/js/max-statements-per-line": [
            "error",
        ],
        "@stylistic/js/multiline-ternary": [
            "error",
        ],
        "@stylistic/js/new-parens": [
            "error",
        ],
        "@stylistic/js/newline-per-chained-call": [
            "error",
        ],
        "@stylistic/js/no-confusing-arrow": [
            "error",
        ],
        "@stylistic/js/no-extra-parens": [
            "error",
            "functions",
        ],
        "@stylistic/js/no-extra-semi": [
            "error",
        ],
        "@stylistic/js/no-floating-decimal": [
            "error",
        ],
        "@stylistic/js/no-mixed-operators": [
            "error",
        ],
        "@stylistic/js/no-mixed-spaces-and-tabs": [
            "error",
        ],
        "@stylistic/js/no-multi-spaces": [
            "error",
        ],
        "@stylistic/js/no-multiple-empty-lines": [
            "error",
            {
                max: 2,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        "@stylistic/js/no-tabs": [
            "error",
        ],
        "@stylistic/js/no-trailing-spaces": [
            "error",
        ],
        "@stylistic/js/no-whitespace-before-property": [
            "error",
        ],
        "@stylistic/js/nonblock-statement-body-position": [
            "error",
        ],
        "@stylistic/js/object-curly-newline": [
            "error",
            {
                ImportDeclaration: {
                    consistent: false,
                    minProperties: 2,
                    multiline: true,
                },
                ExportDeclaration: {
                    consistent: false,
                    minProperties: 2,
                    multiline: true,
                },
            },
        ],
        "@stylistic/js/object-curly-spacing": [
            "error",
            "never",
        ],
        "@stylistic/js/object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true,
                allowMultiplePropertiesPerLine: false,
            },
        ],
        "@stylistic/js/one-var-declaration-per-line": [
            "error",
        ],
        "@stylistic/js/operator-linebreak": [
            "error",
            "after",
        ],
        "@stylistic/js/padded-blocks": [
            "error",
            "never",
        ],
        "@stylistic/js/padding-line-between-statements": [
            "warn",
            {
                blankLine: "always",
                next: "return",
                prev: "*",
            },
            {
                blankLine: "always",
                prev: [
                    "export",
                    "const",
                    "let",
                    "var",
                    "function",
                ],
                next: "*",
            },
            {
                blankLine: "any",
                prev: [
                    "singleline-const",
                    "singleline-let",
                    "singleline-var",
                ],
                next: "*",
            },
            {
                blankLine: "any",
                next: [
                    "export",
                    "const",
                    "let",
                    "var",
                ],
                prev: [
                    "export",
                    "const",
                    "let",
                    "var",
                ],
            },
        ],
        "@stylistic/js/quote-props": [
            "error",
            "consistent-as-needed",
        ],
        "@stylistic/js/quotes": [
            "warn",
            "double",
            {
                avoidEscape: true,
            },
        ],
        "@stylistic/js/rest-spread-spacing": [
            "error",
        ],
        "@stylistic/js/semi": [
            "error",
        ],
        "@stylistic/js/semi-spacing": [
            "error",
        ],
        "@stylistic/js/semi-style": [
            "error",
        ],
        "@stylistic/js/space-before-blocks": [
            "error",
        ],
        "@stylistic/js/space-before-function-paren": [
            "error",
        ],
        "@stylistic/js/space-in-parens": [
            "error",
        ],
        "@stylistic/js/space-infix-ops": [
            "error",
        ],
        "@stylistic/js/space-unary-ops": [
            "error",
        ],
        "@stylistic/js/spaced-comment": [
            "error",
            "always",
            {
                block: {
                    balanced: true,
                },
            },
        ],
        "@stylistic/js/switch-colon-spacing": [
            "error",
        ],
        "@stylistic/js/template-curly-spacing": [
            "error",
        ],
        "@stylistic/js/template-tag-spacing": [
            "error",
        ],
        "@stylistic/js/wrap-iife": [
            "error",
        ],
        "@stylistic/js/wrap-regex": [
            "error",
        ],
        "@stylistic/js/yield-star-spacing": [
            "error",
        ],

        "@stylistic/plus/indent-binary-ops": [
            "off",
        ],
        "@stylistic/plus/type-generic-spacing": [
            "error",
        ],
        "@stylistic/plus/type-named-tuple-spacing": [
            "error",
        ],

        "import-newlines/enforce": [
            "error",
            {
                items: 1,
            },
        ],
        "import/newline-after-import": [
            "error",
            {
                count: 2,
                exactCount: true,
                considerComments: true,
            },
        ],
        "import/no-unresolved": [
            "error",
            {
                ignore: [
                    "^/imports",
                ],
                caseSensitive: true,
                caseSensitiveStrict: false,
            },
        ],
        "import/named": [
            "error",
        ],
        "import/namespace": [
            "error",
        ],
        "import/default": [
            "error",
        ],
        "import/export": [
            "error",
        ],
        "import/no-named-as-default": [
            "warn",
        ],
        "import/no-named-as-default-member": [
            "warn",
        ],
        "import/no-duplicates": [
            "error",
        ],

        // deprecated by `eslint-plugin-jsdoc`
        "require-jsdoc": [
            "off",
        ],
        "valid-jsdoc": [
            "off",
        ],

        "jsdoc/check-access": [
            "warn",
        ],
        "jsdoc/check-alignment": [
            "warn",
        ],
        "jsdoc/check-examples": [
            "off",
        ],
        "jsdoc/check-indentation": [
            "off",
        ],
        "jsdoc/check-line-alignment": [
            "warn",
        ],
        "jsdoc/check-param-names": [
            "warn",
            {
                checkRestProperty: true,
            },
        ],
        "jsdoc/check-property-names": [
            "warn",
        ],
        "jsdoc/check-syntax": [
            "off",
        ],
        "jsdoc/check-tag-names": [
            "warn",
        ],
        "jsdoc/check-types": [
            "warn",
        ],
        "jsdoc/check-values": [
            "warn",
        ],
        "jsdoc/empty-tags": [
            "warn",
        ],
        "jsdoc/implements-on-classes": [
            "warn",
        ],
        "jsdoc/informative-docs": [
            "warn",
        ],
        "jsdoc/match-description": [
            "off",
        ],
        "jsdoc/match-name": [
            "off",
        ],
        "jsdoc/multiline-blocks": "warn",
        "jsdoc/no-bad-blocks": [
            "off",
        ],
        "jsdoc/no-blank-blocks": "warn",
        "jsdoc/no-blank-block-descriptions": [
            "off",
        ],
        "jsdoc/no-defaults": "warn",
        "jsdoc/no-missing-syntax": [
            "off",
        ],
        "jsdoc/no-multi-asterisks": "warn",
        "jsdoc/no-restricted-syntax": [
            "off",
        ],
        "jsdoc/no-types": [
            "off",
        ],
        "jsdoc/no-undefined-types": [
            "off",
        ],
        "jsdoc/require-asterisk-prefix": [
            "warn",
        ],
        "jsdoc/require-description": [
            "warn",
            {
                checkConstructors: false,
                checkGetters: false,
                checkSetters: false,
            },
        ],
        "jsdoc/require-description-complete-sentence": [
            "off",
        ],
        "jsdoc/require-example": [
            "off",
        ],
        "jsdoc/require-file-overview": [
            "off",
        ],
        "jsdoc/require-hyphen-before-param-description": [
            "warn",
            "never",
        ],
        "jsdoc/require-jsdoc": [
            "warn",
            {
                contexts: [
                    ":has(" +
                    "VariableDeclarator[init.callee.object.name='Object']" +
                    "[init.callee.property.name='freeze']" +
                    ")[declarations]",
                    "Program > VariableDeclaration > .declarations > ArrowFunctionExpression",
                ],
                require: {
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                },
            },
        ],
        "jsdoc/require-param": [
            "warn",
        ],
        "jsdoc/require-param-description": [
            "off",
        ],
        "jsdoc/require-param-name": [
            "warn",
        ],
        "jsdoc/require-param-type": [
            "warn",
        ],
        "jsdoc/require-property": [
            "warn",
        ],
        "jsdoc/require-property-description": [
            "off",
        ],
        "jsdoc/require-property-name": [
            "warn",
        ],
        "jsdoc/require-property-type": [
            "warn",
        ],
        "jsdoc/require-returns": [
            "warn",
        ],
        "jsdoc/require-returns-check": [
            "warn",
        ],
        "jsdoc/require-returns-description": [
            "off",
        ],
        "jsdoc/require-returns-type": [
            "warn",
        ],
        "jsdoc/require-throws": [
            "warn",
        ],
        "jsdoc/require-yields": [
            "warn",
        ],
        "jsdoc/require-yields-check": [
            "warn",
        ],
        "jsdoc/sort-tags": [
            "warn",
        ],
        "jsdoc/tag-lines": [
            "warn",
            "any",
            {
                startLines: 1,
            },
        ],
        "jsdoc/valid-types": [
            "warn",
        ],
    },
};
/* eslint-disable sort-keys, max-lines, no-magic-numbers */
