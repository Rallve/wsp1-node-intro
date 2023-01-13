const express = require('express');
const nunjucks = require('nunjucks');
const createError = require('http-errors');
const nav = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "contact",
        title: "Contact"
    }
];
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

app.use(express.static('public'));
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.njk');
});

nunjucks.configure('views', {
    autoescape: true,
    express: app,
});

app.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello fellas',
        title: 'Nunjucks hello world',
        nav: nav
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

