# findkeys

[![Build Status](https://travis-ci.org/melkishengue/findkeys.svg?branch=master)](https://travis-ci.org/melkishengue/findkeys) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**A simple and blazing fast object keys locator** ✨

Sometimes it happens that we have a very big object with a lot of keys, like a response to a _http request_ for example. Findkeys is a small utility module, able to search such an object and return paths to keys of interest. Supports all javascript types. ES5 and ES6 compatible.

# Install
npm:
```
npm install findkeys
```
yarn:
```
yarn add findkeys
```


# Usage

```javascript
    let obj = {
        user: {
            city: 'Paderborn',
            country: 'Germany',
            datas: {
                firstname: 'John',
                lastname: 'Doe'
            },
            children: [
                {
                    firstname: 'Lisa',
                    lastname: 'Doe'
                },
                {
                    firstname: 'Bryan',
                    lastname: 'Doe'
                }
            ]
        }
    }

    const { findkeys } = require('findkeys')
    // import { findkeys } from 'findkeys'

    let res = findkeys(obj, ['firstname', 'country'])
    // [root.user.country, root.user.datas.firstname, root.user.children.0.firstname, root.user.children.1.firstname]
    console.log(res)
```

# License

MIT © Melkis Hengue
