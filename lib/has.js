const hasKeyObject = attr => obj => {
  if(obj)
    if(obj[attr])
      return true
    else if (obj[attr] === 0)
      return true

  return false
}

const has = attr => obj => {

  if (attr instanceof Array) {
    return attr.reduce((acc, act) => acc && hasKeyObject(act)(obj), attr.length > 0)
  }

  return hasKeyObject(attr)(obj)

}
export default has
