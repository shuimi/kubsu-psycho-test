const Router = require('express').Router;
const PsychoTestController = require('../controllers/psycho-test-controller');

const router = new Router();

/// TESTS API

router.get('/tests', PsychoTestController.getTests);
router.post('/tests', PsychoTestController.addTest);

module.exports = router;