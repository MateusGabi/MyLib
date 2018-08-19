// @flow
import { FunctionType } from './../types'
const sub: FunctionType<FunctionType<number>> = (
  x: number
): FunctionType<number> => (y: number): number => y - x
export default sub
