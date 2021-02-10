const { task, src, dest, series } = require('gulp')
const minifycss = require('gulp-minify-css')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')

const css = function () {
    return src(['src/*.css'])
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('dist'))
}
css.displayName = 'minifycss'
task(css);

const js = function () {
    return src(['src/**/*.js'])
        .pipe(terser())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('dist'))
}
js.displayName = 'minifyjs'
task(js)

const goconcat = function () {
    return src(['./dist/mingyan.min.js', './dist/main.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(dest('./dist'));
}
goconcat.displayName = 'concat'
task(goconcat);

const gobabel = function () {
    return src('./dist/all.min.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(dest('dist'))
}
gobabel.displayName = 'babel'
task(gobabel);

const minbabeljs = function () {
    return src('./dist/all.min.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest('dist'))
}
minbabeljs.displayName = 'minifybabeljs'
task(minbabeljs)

const copyhtml = function () {
    return src('./index.html')
        .pipe(rename("404.html"))
        .pipe(dest('.'))
}
copyhtml.displayName = 'copyhtml'
task(copyhtml)

const addheader = function () {
    return src(['./src/HEADER', 'dist/all.min.js'])
        .pipe(concat('all.min.js'))
        .pipe(dest('./dist'));
}
addheader.displayName = 'addheader'
task(addheader)

task('default', series(['minifycss', 'minifyjs', 'concat', 'babel', 'minifybabeljs', 'copyhtml', 'addheader']))
