module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //"indent": [0],
        "linebreak-style": [2, "unix"],
        "semi": [2, "always"],
        "no-alert": 2,
        "no-debugger": 2,
        "no-restricted-syntax": [2, "WithStatement"],
        "no-unused-expressions": 2,
        "no-trailing-spaces": 0,
        "no-shadow": 2,
        "no-undef": 2,
        "no-unused-vars": 0,
        "no-use-before-define": 2,
        "no-empty": [0],
        "new-cap": 2,
        "no-dupe-class-members": 2,
        "no-console": 0,
        "quotes": [0],
        "eol-last": 2,
        "strict": [2, "global"],
        "brace-style": [2, "1tbs"],
        "comma-dangle": [2, "never"],
        "consistent-return": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "no-multi-spaces": 2,
        "no-unused-expressions": 2,
        "no-use-before-define": 0
    }
};