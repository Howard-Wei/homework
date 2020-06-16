import send from '../utils/mail'
import moment from 'moment'
class LoginController {
  async sendMail(ctx) {
    const { body } = ctx.request
    
    try {
      const data = await send({
        ...body,
        expire: moment().add(30, 'm').format('YYYY-MM-DD HH:mm:ss')
      })
      ctx.body = {
        code: 1,
        msg: '发送成功',
        data
      }
    } catch (error) {
      ctx.body = {
        code: 0,
        msg: '发送失败'
      }
    }
  }
}

export default new LoginController()
