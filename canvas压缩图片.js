function canvasCompress(selector, MAXSIZE, callback) {
  let upload = document.getElementById(selector)
  const ACCEPT = ['image/jpeg', 'image/png', 'image/jpg']
  MAXSIZE = MAXSIZE > 0 ? MAXSIZE : 3 * 1024 * 1024

  const uploadToServer = callback ? callback : function(compressImage) {
    // 上传函数
    console.log(`uploadToServer ${compressImage}`)
  }

  function convertImageToBase64(file, callback) {
    // 获取 base64
    let reader = new FileReader()
    reader.addEventListener('load', function(e) {
      const base64Image = e.target.result
      callback && callback(base64Image)
      reader = null
    })
    reader.readAsDataURL(file)
  }

  function compress(base64Image, callback) {
    // 压缩函数
    let maxW = 1024
    let maxH = 1024
    const image = new Image()

    image.addEventListener('load', function(e) {
      let ratio // 压缩比
      let needCompress // 是否压缩
      // 图片实际宽高
      if (maxW < image.naturalWidth) {
        needCompress = true
        ratio = image.naturalWidth / maxW
        maxH = image.naturalHeight / ratio
      }
      if (maxH < image.naturalHeight) {
        needCompress = true
        ratio = image.naturalHeight / maxH
        maxW = image.naturalWidth / ratio
      }
      if (!needCompress) {
        maxW = image.naturalWidth
        maxH = image.naturalHeight
      }

      const canvas = document.createElement('canvas')
      canvas.setAttribute('id', '__compress__')
      canvas.width = maxW
      canvas.height = maxH
      canvas.style.visibility = 'hidden'
      document.body.appendChild(canvas)

      const ctx = canvas.getContext('2d')
      // 清空
      ctx.clearRect(0, 0, maxW, maxH)
      ctx.drawImage(image, 0, 0, maxW, maxH)
      const compressImage = canvas.toDataURL('image/jpeg', 0.8) // 二次压缩 0.8倍
      callback && callback(compressImage)
      canvas.remove()
    })

    image.src = base64Image
  }

  upload.addEventListener('change', function(e) {
    const [file] = e.target.files
    if (!file) return;
    const {
      type: fileType,
      size: fileSize
    } = file
    if (!ACCEPT.includes(fileType)) {
      alert(`不支持${fileType}类型`)
      return;
    }
    if (fileSize > MAXSIZE) {
      alert(`文件超出${MAXSIZE}`)
      return;
    }
    convertImageToBase64(file, (base64Image) => compress(base64Image, uploadToServer))
  })

}

export default canvasCompress
