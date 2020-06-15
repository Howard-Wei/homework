import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import koaJson from 'koa-json'
import koaCompose from 'koa-compose'
import compress from 'koa-compress'
import router from './routes'

const isDev = process.env.NODE_ENV === 'dev'

const app = new Koa()
app.use(koaCompose([
  cors({ credentials: true }),
  koaBody(),
  helmet(),
  koaJson({ pretty: false, param: 'pretty'})
]))

app.use(router())

if (!isDev) {
  app.use(compress())
}

app.listen(3000, () => {
  console.log(`server is listening on port:3000`)
})
