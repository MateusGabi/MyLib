const has = attr => obj => {
  if (obj) {
    if (obj[attr]) return true
    else if (obj[attr] === '') return true
    else if (obj[attr] === 0) return true
  }

  return false
}
export default has
