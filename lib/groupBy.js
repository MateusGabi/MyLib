const groupBy = attribute => collection => {
	return collection.reduce((acc, cur, index, arr) => {
		const group = cur[attribute]
		if (!acc.hasOwnProperty(group)) {
			acc[group] = []
		}
		acc[group].push(cur)
		return acc
	}, {})
}

export default groupBy
