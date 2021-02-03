const { task, src, dest, series } = require('gulp')
const minifycss = require('gulp-minify-css')
const terser = require('gulp-terser')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const babel = require('gulp-babel')

const css = function () {
    return src(['src/*.css'])
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('dist'))
        .pipe(minifycss())
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
        .pipe(terser())
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
        .pipe(terser())
        .pipe(dest('dist'))
        .pipe(terser())
}
minbabeljs.displayName = 'minifybabeljs'
task(minbabeljs)

task('default', series(['minifycss', 'minifyjs', 'concat', 'babel', 'minifybabeljs']))