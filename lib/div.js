// @flow
import { FunctionType } from './../types'
const div: FunctionType<FunctionType<number>> = (
  x: number
): FunctionType<number> => (y: number): number => y / x
export default div
