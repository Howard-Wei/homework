import combine from 'koa-combine-routers'
import loginRouter from './loginRouter'

export default combine(
  loginRouter
)
