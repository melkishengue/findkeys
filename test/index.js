import { assert } from 'chai';
import findkeysdefault, { findkeys } from '../src';

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

describe('Can locate keys.', () => {
  it('works with empty object', () => {
    let res = findkeys({}, ['firstname', 'country'])
    assert(res.length == 0, 'lookup failed');
  });

  it('works with empty property property array', () => {
    let res = findkeys(obj, [])
    assert(res.length == 0, 'lookup failed');
  });

  it('works with empty object and empty property property array', () => {
    let res = findkeys({}, [])
    assert(res.length == 0, 'lookup failed');
  });

  it('works with normal object', () => {
    let res = findkeys(obj, ['firstname', 'country'])
    assert(res.includes('root.user.country') && res.includes('root.user.children.0.firstname') && res.includes('root.user.children.1.firstname'), 'lookup failed');
  });
});
