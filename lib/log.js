// @flow
import { FunctionType } from './../types'
const log: FunctionType<FunctionType<{}>> = (
  x: string
): FunctionType<{}> => (y: {}): {} => {
  console.log(`${x}:`, y)
  return y
}
export default log
