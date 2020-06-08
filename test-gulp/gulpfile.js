const { src, dest, watch, series } = require('gulp')
const del = require('del')
const Plugins = require('gulp-load-plugins')()
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function serve(cb) {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
  cb()
}

function js(cb) {
  src('./src/scripts/*.js')
    .pipe(Plugins.uglify())
    .pipe(dest('./dist/scripts'))
    .pipe(reload({ stream: true }))
  cb()
}

function css(cb) {
  src('./src/styles/*.scss')
    .pipe(Plugins.sass({ outputStyle: 'coompressed' }))
    .pipe(Plugins.autoprefixer({
      cascade: false,
      remove: false
    }))
    .pipe(dest('./dist/styles'))
    .pipe(reload({ stream: true }))
  cb()
}

function html(cb) {
  src('./src/*.html')
    .pipe(dest('./dist'))
    .pipe(reload({ stream: true }))
  cb()
}

function watcher(cb) {
  watch('./src/scripts/*.js', js)
  watch('./src/styles/*.scss', css)
  watch('./src/*.html', html)
}

async function clean(cb) {
  await del('./dist')
  cb()
}

exports.scripts = js
exports.styles = css
exports.clean = clean
exports.html = html
exports.serve = serve
exports.default = series(
  clean,
  js,
  css,
  html,
  serve,
  watcher
)