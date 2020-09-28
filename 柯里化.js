// multiply(2, 3).result = 6
// multiply(2, 4)(2)(3, 1).result = 48

function multiply(...args) {
	let sum = function(...args2) {
		sum.result *= [].reduce.call(args2, (sum, current) => sum * current, 1)
		return sum
	}
	sum.result = [].reduce.call(args, (sum, current) => sum * current, 1)
	return sum
}

console.log(multiply(2)(2)(3, 1).result)
