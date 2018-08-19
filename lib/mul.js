// @flow
import { FunctionType } from './../types'
const mul: FunctionType<FunctionType<number>> = (
  x: number
): FunctionType<number> => (y: number): number => y * x
export default mul
