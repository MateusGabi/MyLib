// @flow
import { FunctionType } from './../types'
const groupBy: FunctionType<FunctionType<{}>> = (
  attribute: string | number
): FunctionType<{}> => (collection: Array<{}>): {} => {
  const response: {} = {}
  for (let item of collection) {
    const group = item[attribute]
    if (!response[group]) {
      response[group] = []
    }
    response[group].push(item)
  }
  return response
}

export default groupBy
