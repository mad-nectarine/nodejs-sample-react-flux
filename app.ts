import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as uuid from 'node-uuid';
import * as React from 'react';
//import routesConfig from './routes/routesConfig';
 
var app = express();

//===== view engine setup =====
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views');
//** tsc compile *.tsx to *.jsx when jsx option is "preserve" in tsconfig.json.
 //app.set('view engine', 'jsx');
//  app.engine('jsx', require('express-react-views').createEngine());
//** tsc compile *.tsx to *.js when jsx option is "react" in tsconfig.json.
 app.set('view engine', 'js');
 app.engine('js', require('express-react-views').createEngine());

//===== set middleware
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    genid: function (req) {
        return uuid.v1() // use UUIDs for session IDs
    },
    secret: 'web.express.session.secret.key',
    saveUninitialized: false,
    //cookie: { secure: true },
    resave: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//===== set routes
//routesConfig(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

//===== error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req: express.Request, res: express.Response, next: Function): any => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: Function): any => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
