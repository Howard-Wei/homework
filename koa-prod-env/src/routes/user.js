import Router from 'koa-router'
const router = new Router({
  prefix: '/user'
})

router.get('/:name', (ctx) => {
  console.log(ctx.params)
  ctx.body = {
    code: 1,
    data: {
      name: 'weihanwei',
      age: 25
    }
  }
})

export default router