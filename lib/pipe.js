import inArray from './inArray'

const compose = (acc, act) => 
    (acc instanceof Array) ? inArray(act)(acc) : act(acc)

const pipe = (...functions) => {
  let variable = functions.shift()
  if (functions.length < 1) {
    throw new TypeError('No function to be appllied')
  }
  return functions.reduce(compose, variable)
}
export default pipe