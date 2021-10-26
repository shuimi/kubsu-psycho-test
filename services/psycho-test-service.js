const PsychoTestModel = require('../models/psycho-test-model');
const ApiError = require("../exceptions/api-errors");

class PsychoTestService {

    async getTests() {
        const tests = await PsychoTestModel.find();
        return tests;
    }

    async addTest( test ) {
        if (!test) {
            throw new ApiError.BadRequest('Empty tests data!');
        }
        return await PsychoTestModel.create(test);
    }

}

module.exports = new PsychoTestService();