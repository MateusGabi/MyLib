// @flow
import { FunctionType } from './../types'
const sum: FunctionType<number> = (x: number): FunctionType<number> => (
  y: number
): number => y + x
export default sum
