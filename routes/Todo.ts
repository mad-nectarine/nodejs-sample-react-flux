import * as express from 'express';

var router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: Function) {
    res.render('Todo', { title: 'Todo' });
});

export default router;
module.exports = router;