const PsychoTestService = require('../services/psycho-test-service');

class PsychoTestController {

    async getTests( request, response, next ) {
        try {
            const tests = await PsychoTestService.getTests();
            return response.json(tests);
        } catch (exc) {
            next(exc);
        }
    }

    async addTest( request, response, next ) {
        try {
            const test = request.body;
            await PsychoTestService.addTest(test);
            return response.json({ messages: [ 'Success!' ] });
        } catch (exc) {
            next(exc);
        }
    }

}

module.exports = new PsychoTestController();