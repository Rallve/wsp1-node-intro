const  express = require('express');
const  router = express.Router();
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

router.get('/', async function (req, res, next) {
    res.render('index.njk', {
        message: 'Hello world! Now with a route file!',
        title: 'Nunjucks hello world',
        nav: nav,
    });
});

module.exports = router