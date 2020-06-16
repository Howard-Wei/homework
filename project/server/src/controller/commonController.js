import svgCaptcha from 'svg-captcha'

class CommonController {

  getCaptcha(ctx) {
    const svg = svgCaptcha.create({
      size: 4,
      height: 35,
      ignoreChars: '0oil1',
      noise: Math.floor(Math.random() * 5 + 1)
    })
    ctx.body = {
      code: 1,
      msg: 'success',
      data: svg.data
    }
  }

}

export default new CommonController()
