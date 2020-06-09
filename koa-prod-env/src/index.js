import Koa from 'koa'
import koaStatic from 'koa-static'
import cors from '@koa/cors'
import koaBody from 'koa-body'
import koaCompose from 'koa-compose'
import koaJson from 'koa-json'
import hoaHelmet from 'koa-helmet'
import compress from 'koa-compress'
import { resolve } from 'path'
import router from './routes'

const isDev = process.env.NODE_ENV === 'dev'

const app = new Koa()
app.use(koaCompose([
  koaStatic(resolve(__dirname, './public')),
  koaBody(),
  koaJson({ pretty: false, param: 'pretty' }),
  cors(),
  hoaHelmet()
]))

app.use(router())

if (!isDev) {
  app.use(compress())
}

app.listen(3000, () => {
  console.log(`server is listening on port:3000`)
})