var gulp = require('gulp');
var bower = require('gulp-bower');
var bowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var exit = require('gulp-exit');
var tsd = require('gulp-tsd');
var install = require('gulp-install');
var typescript = require('gulp-typescript');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var seq = require('run-sequence');
var babel = require('gulp-babel');
var tsconfig = require('tsconfig');
var fs = require('fs');
var path = require('path');

//gulp.src("gulpfile.js").pipe(exit());

/** bower  **/
gulp.task("bower-install", function () {
    console.log("executing [bower-install]...");
    return bower({ cmd: 'install' });
});
gulp.task("bower-update", function () {
    console.log("executing [bower-install]...");
    return bower({ cmd: 'update' });
});

/** lib  **/
gulp.task("make-lib", function () {
    console.log("executing [make-lib]...");
    var jsFilter = filter('**/*.js');
    gulp.src(bowerFiles())
        .pipe(jsFilter)
        .pipe(concat('lib.js'))
        .pipe(gulp.dest("./public/scripts"));
});

/** tsd  **/
gulp.task("tsd-reinstall", function (callback) {
    console.log("executing [tsd-reinstall]...");
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

/** tsconfig  **/
gulp.task("tsconfig-update", function (callback) {
    console.log("executing [tsconfig-update]...");
    require('./node_modules/tsconfig-cli/tsconfig');
});

/** npm  **/
gulp.task("npm-reinstall", function () {
    console.log("executing [npm-reinstall]...");
    gulp.src(["./package.json"])
        .pipe(install());
});

/** scripts  **/

gulp.task("tsc-compile", function () {
    console.log("executing [tsc-compile]...");
    var tsProject = typescript.createProject('tsconfig.json');
    var tsResult = tsProject.src() // instead of gulp.src(...) 
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest('./'));
});

gulp.task("browserify", function () {
    console.log("executing [browserify]...");
    var pages = [ 
        'Todoindex'
         ];
    pages.forEach(function(item){
        console.log("browserifying for min [" + item + "]...");
        browserify({
            entries: ['./public/scripts/pages/' + item + '.js'],
            transform: [reactify] })
        .bundle()
        .pipe(source('./public/scripts/pages/built/' + item + '.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./'));
        
        console.log("browserifying for debug [" + item + "]...");
        browserify({
            entries: ['./public/scripts/pages/' + item + '.js'],
            transform: [reactify] })
        .bundle()
        .pipe(source('./public/scripts/pages/built/' + item + '.debug.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./'));
    });
});

gulp.task("tsconfig-update", function () {
    console.log("executing [tsconfig-update]...");
    //load tsconfig.json
    var tsConfigPath = "./tsconfig.json";
    var projectDir = path.dirname();
    var load_tsconfig = function (resolve, reject) {
        fs.stat(tsConfigPath, function (err) {
            if (err) {
                reject(path.default.resolve(tsConfigPath) + " not exist");
            }
            resolve(tsConfigPath);
        });
    };
    //file list取得
    var get_files = function () {
        return tsconfig
            .load(projectDir)
            .then(function (result) {
                //Resolve files into relative path"
                var resolved = [];
                result.files.forEach(function (file) {
                    var fpath = './' + path.relative(projectDir, file).replace(/\\/g, '/');
                    resolved.push(fpath);
                });
                result.files = resolved;
                return result;
            });
    };
    //
    var write_config = function (tsconfig) {
        //Overwrite tsconfig.json
        fs.writeFile(tsConfigPath, JSON.stringify(tsconfig, null, 2));
    };

    new Promise(load_tsconfig)
        .then(get_files)
        .then(write_config)
        .catch(function (err) {
            console.error("[tsconfig-update] " + err);
        });
});
gulp.task("jsconfig-update", function () {
    console.log("executing [jsconfig-update]...");
    //load jsconfig.json
    var tsConfigPath = "./jsconfig.json";
    var projectDir = path.dirname();
    var load_tsconfig = function (resolve, reject) {
        fs.stat(tsConfigPath, function (err) {
            if (err) {
                reject(path.resolve(tsConfigPath) + " not exist");
            }
            resolve(tsConfigPath);
        });
    };
    //file list取得
    var get_files = function () {
        return tsconfig
            .readFile(tsConfigPath)
            .then(function (result) {
                //Resolve files into relative path"
                var resolved = [];
                result.files.forEach(function (file) {
                    var fpath = './' + path.relative(projectDir, file).replace(/\\/g, '/');
                    resolved.push(fpath);
                });
                result.files = resolved;
                return result;
            });
    };
    //
    var write_config = function (tsconfig) {
        //Overwrite jsconfig.json
        fs.writeFile(tsConfigPath, JSON.stringify(tsconfig, null, 2));
    };

    return new Promise(load_tsconfig)
        .then(get_files)
        .then(write_config)
        .catch(function (err) {
            console.error("[jsconfig-update] " + err);
        });
});

gulp.task("babel", function () {
    console.log("executing [babel]...");
    //load jsconfig.json
    var tsConfigPath = "./jsconfig.json";
    var projectDir = path.dirname();
    var load_tsconfig = function (resolve, reject) {
        fs.stat(tsConfigPath, function (err) {
            if (err) {
                reject(path.resolve(tsConfigPath) + " not exist");
            }
            resolve(tsConfigPath);
        });
    };
    //file list取得
    var convert = function () {
        return tsconfig
            .readFile(tsConfigPath)
            .then(function (result) {
                //Resolve files into relative path"
                result.files.forEach(function (file) {
                    var fpath = './' + path.relative(projectDir, file).replace(/\\/g, '/');
                    var fdir = path.dirname(fpath);
                    gulp.src(fpath)
                        .pipe(babel({
                            presets: ['es2015']
                        }))
                        .pipe(gulp.dest(fdir));
                    //.pipe(gulp.dest('./babel'));
                });
                return result;
            });
    };

    return new Promise(load_tsconfig)
        .then(convert)
        .catch(function (err) {
            console.error("[jsconfig-update] " + err);
        });
});

gulp.task("script", function (callback) {
    console.log("executing [script]...");
    return seq(
        "tsconfig-update",
        "tsc-compile",
        "jsconfig-update",
        "babel",
        "browserify",
        callback
        );
});
