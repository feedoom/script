Function.prototype._bind = function() {
	const args = Array.prototype.slice.call(arguments)
	const context = args.shift()
	const func = this
	return function() {
		return func.apply(context, args)
	}
}

function say() {
	console.log(`hello ${this.name}`)
}
let me = {
	name: 'feedoom'
}
let saybind = say._bind(me)
saybind()
