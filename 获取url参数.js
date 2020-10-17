function getUrlSearch(url) {
  let reg = /^.*\/\?(\w*=\w*)(&\w*=\w*)*#?.*/g
  let res = url.matchAll(reg)
  res = [...res][0] 
  if (!res) return {}
  console.log(res)
  res = res[2] ? [res[1], ...[...res.slice(2)].map(item => item.substring(1))] : [res[1]]
  let search = {}
  res.forEach(item => {
    let [key, value] = [...item.split('=')]
    search[key] = value
  })
  return search
}
