const capitalizeWord = minimalStringLength => string => {
  const _string = string.toLowerCase()
  if (_string.length > minimalStringLength) {
    return _string.charAt(0).toUpperCase() + _string.substring(1)
  }
  return _string
}

const capitalize = (string, minimalStringLength = 5) =>
  string
    .split(' ')
    .map(capitalizeWord(minimalStringLength))
    .join(' ')

export default capitalize
