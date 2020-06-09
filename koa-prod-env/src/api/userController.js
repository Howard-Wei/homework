class UserController {
  constructor() {}

  info(ctx) {
    let { name } = ctx.params
    ctx.body = {
      code: 1,
      data: {
        name,
        age: 28
      },
      msg: 'msg body content'
    }
  }
}

export default new UserController()