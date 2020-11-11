function iterate({
  obj, properties, stack, res
}) {
  Object.keys(obj).forEach((property) => {
    // eslint-disable-next-line
    if (obj.hasOwnProperty(property)) {
      if (properties.includes(property)) {
        res.push(`${stack}.${property}`);
      }

      if (typeof obj[property] === 'object') {
        if (Array.isArray(obj[property])) {
          // eslint-disable-next-line
          obj[property].forEach((element, index) => {
            iterate({
              obj: element,
              properties,
              stack: `${stack}.${property}.${index}`,
              res
            });
          });
          // eslint-disable-next-line
        } else if (obj.hasOwnProperty(property)) {
          iterate({
            obj: obj[property],
            properties,
            stack: `${stack}.${property}`,
            res
          });
        }
      }
    }
  });
}

function findkeys(obj, properties) {
  // eslint-disable-next-line
  let res = [];
  iterate({
    obj,
    properties,
    stack: 'root',
    res
  });
  return res;
}

export default findkeys;

export { findkeys };
