// @flow
import { FunctionType } from './../types'
const inArray: FunctionType<FunctionType<Array<{}>>> = (
  f: FunctionType<void>
): FunctionType<Array<{}>> => (arr: Array<{}>): Array<{}> => arr.map(f)
export default inArray
