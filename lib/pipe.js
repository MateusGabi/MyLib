import inArray from './inArray'

const pipe = (...functions) => {
  let variable = functions[0]
  for (let i = 1; i < functions.length; i++) {
    if (variable instanceof Array) {
      variable = inArray(functions[i])(variable)
    } else {
      variable = functions[i](variable)
    }
  }
  return variable
}

export default pipe
