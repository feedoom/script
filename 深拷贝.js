function deepClone(source = {}) {
	if (typeof source !== 'object' || source == null) {
		return source
	}

	let result
	if (source instanceof Array) {
		result = []
	} else {
		result = {}
	}

	for (let key in source) {
		if (source.hasOwnProperty(key)) {
			result[key] = deepClone(source[key])
		}
	}

	return result
}


const source = {
	name: 'feedoom',
	age: 11,
	good: true,
	skill: ['html', 'javascript', 'vue'],
	address: {
		country: 'china'
	}
}
let target = deepClone(source)
target.age = 12
console.log(source)
console.dir(target)
