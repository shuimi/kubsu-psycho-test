const { Schema, model } = require('mongoose');

const PsychoTestSchema = new Schema({
    login: { type: String, required: true, default: '' },
    test_1: new Schema({
        answer: { type: Array(Number), required: true, default: [] },
        result: { type: Array(Number), required: true, default: [] },
        time: { type: Number, required: true, default: 0 },
    }),
    test_2: new Schema({
        answer: { type: Array(Number), required: true, default: [] },
        result: { type: Number, required: true, default: 0 },
        time: { type: Number, required: true, default: 0 },
    }),
    test_3: new Schema({
        answer: { type: Array(String), required: true, default: [] },
        result: { type: Array(String), required: true, default: [] },
        time: { type: Number, required: true, default: 0 },
    }),
});

module.exports = model('PsychoTest', PsychoTestSchema);