function iterate({ obj, properties, stack, res }) {
  for (var property in obj) {
    if (properties.includes(property)) {
      res.push(`${stack}.${property}`)
    }

    if (typeof obj[property] == "object") {
      if (Array.isArray(obj[property])) {
        obj[property].forEach((element, index) => {
          iterate({ obj: element, properties, stack: stack + '.' + property + '.' + index, res })
        })
      } else {
        if (obj.hasOwnProperty(property)) {
          iterate({ obj: obj[property], properties, stack: stack + '.' + property, res })
        }
      }
    }
  }
}

function findkeys(obj, properties) {
  let res = []
  iterate({ obj, properties, stack: 'root', res })
  return res
}

export default findkeys;

export { findkeys };


