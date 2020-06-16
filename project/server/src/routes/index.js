import combine from 'koa-combine-routers'
import commonRouter from './commonRouter'
import loginRouter from './loginRouter'

export default combine(
  commonRouter,
  loginRouter
)
