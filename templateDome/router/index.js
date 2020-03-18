const getRouter = require('router');
const router = getRouter();
const User = require('../server/user');
const template = require('art-template');
const path = require('path');
const indexTemplateUrl = path.join(__dirname, '../views', 'index.art');

router.get('/index', async (req, res) => {
    const userAll = await User.find();
    console.log(userAll);
    let indexTemplate = template(indexTemplateUrl, {
        userA: userAll
    });
    res.end(indexTemplate);
});

module.exports = router;