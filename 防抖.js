function debounce(func, delay = 500) {
	let timer = null
	return function() {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			func.apply(this, arguments)
			timer = null
		}, delay)
	}
}
