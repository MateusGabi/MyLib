const groupBy = attribute => collection => {
  const response = {}
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
