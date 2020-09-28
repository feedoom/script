function ajax(options) {
	let {
		url,
		data
	} = options
	const method = options.method || 'get'
	const headers = options.headers || ''
	let success = options.success
	let error = options.error

	let xhr = new XMLHttpRequest()


	xhr.onreadystatechange = function() {
		// 接收完响应数据
		if (xhr.readyState == 4) {
			let status = xhr.status
			if (status >= 200 && status < 300) {
				// 响应数据
				let response = ''
				// 接收数据的类型
				let type = xhr.getResponseHeader('Content-type')
				if (type == 'application/json') {
					response = JSON.parse(xhr.response)
				} else {
					response = xhr.response
				}
				// 请求成功
				success && success(response)
			} else {
				// 请求出错
				error && error(response)
			}
		}
	}


	// 合并 get 请求时的 url
	if (data && method == 'get') {
		url += '?'
		for (let key in data) {
			url += `${key}=${data[key]}&`
		}
		url = url.slice(0, url.length - 1)
	}


	xhr.open(method, url)

	// 设置请求报文
	if (headers) {
		for (let key in headers) {
			xhr.setRequestHeader(key, headers[key])
		}
	}

	if (method == 'get') {
		xhr.send(null)
	} else if (method == 'post') {
		xhr.send(data)
	} else {
		xhr.send()
	}
}

ajax({
	method: 'get',
	url: 'http://localhost:3000/first',
	data: {
		'name': 'linus'
	},
	headers: {
		'Accept-Language': 'zh-CN'
	},
	success: function(data) {
		console.log('ok ajax', data)
	},
	error: function(data) {
		console.log('error ajax', data)
	}
})
