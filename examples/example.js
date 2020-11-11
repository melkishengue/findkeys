/* eslint-disable no-console */
const defaultfindkeys = require('../lib').default;
const { findkeys } = require('../lib');

let proband = {
    person: {
        name: "test",
        datas: {
            firstname: 'Melkis',
            lastname: 'hengue'
        },
        children: [
            {
                firstname: 'Melkis',
                lastname: 'hengue'
            },
            {
                firstname: 'Melkis',
                lastname: 'hengue'
            }
        ]
    }
}

console.log('😗', findkeys(proband, ['name']))
console.log('😗', defaultfindkeys(proband, ['name']))