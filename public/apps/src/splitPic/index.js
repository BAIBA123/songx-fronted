import './index.less'

const input = $('#file')
const viewBtn = $('#view')
const splitBtn = $('#split')
const showBox = $('#showBox')
const inputBox = $('.input-box')
const tip = $('.tip')
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
let row = 3
let col = 3

// 预览
viewBtn.on('click', function () {
  const img = $('.input-box img')
  if (!validator()) return

  let td = ''
  let tr = ''
  for (let x = 0; x < col; x++) {
    td += '<td></td>'
  }
  for (let y = 0; y < row; y++) {
    tr += `<tr>${td}</tr>`
  }
  const height = img.height() + 'px'
  const width = img.width() + 'px'
  const table = `<table style="height: ${height}; width: ${width}">${tr}</table>`
  $('.input-box table').remove()
  inputBox.append(table)
})

// 粉碎
splitBtn.on('click', function () {
  if (!validator()) return

  showBox.empty()
  splitImg(row, col)
  showBox.show()
  inputBox.hide()
  $('.tab').toggleClass('active')
  $(this).attr('disabled', true)
})

// 输入行
$('.row').on('input', function () {
  splitBtn.attr('disabled', false)
  row = $(this).val()
})

// 输入列
$('.col').on('input', function () {
  splitBtn.attr('disabled', false)
  col = $(this).val()
})

// 上传
input.on('change', async function () {
  await splitBtn.attr('disabled', false)
  const file = input.get(0).files[0]
  const base64 = await fileReader(file)
  $('.input-box table').remove()
  await createImg(base64)
})

// 切换tab
$('.tab-box').on('click', function (e) {
  $('.tab').removeClass('active')
  $(e.target).addClass('active')
  if (e.target.innerHTML === '上传') {
    inputBox.show()
    showBox.hide()
  } else {
    inputBox.hide()
    showBox.show()
  }
})

// 校验行列、图片
function validator () {
  if (!$('.input-box img').length) {
    alert('请先上传图片！')
    return false
  } else if (!row || !col) {
    alert('请填写行、列！')
    return false
  } else if (row > 10 || col > 10) {
    alert('行、列不能大于10！')
    return false
  } else {
    return true
  }
}

// 获取base64
function fileReader (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function (e) {
      resolve(e.target.result)
    }
  })
}

// 渲染初始图片
function createImg (base64) {
  return new Promise((resolve, reject) => {
    const img = `<img src="${base64}" alt="">`
    const imgRaw = `<img id="raw" style="display: none" src="${base64}" alt="">`
    $('.input-box img').remove()
    $('.input-box').append(img)

    $('.main #raw').remove()
    $('.main').append(imgRaw)

    showBox.empty()
    tip.hide()
    resolve()
  })
}

// 渲染分割的图片
function drawImg (options = {}) {
  const img = $('.input-box img')
  canvas.width = options.width
  canvas.height = options.height
  ctx.drawImage(
    img[0],
    options.x,
    options.y,
    options.width,
    options.height,
    0,
    0,
    options.width,
    options.height
  )
  const base64 = canvas.toDataURL()
  const imgEle = `<img src="${base64}" alt="">`
  showBox.append(imgEle)
}

// 分割图片
function splitImg (row, col) {
  const list = []
  const img = $('#raw')
  console.log(img.width())
  console.log(img.height())
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < col; x++) {
      const simpleWidth = parseInt(img.width() / col)
      const simpleHeight = parseInt(img.height() / row)
      list.push({
        x: x * simpleWidth,
        y: y * simpleHeight,
        width: simpleWidth,
        height: simpleHeight
      })
    }
  }
  list.forEach((item) => {
    console.log(item)
    drawImg(item)
  })
}
