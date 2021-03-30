const assert = require('assert');
const Paint = require('../paint.js');

it('should have a number of litres', function() {
    const paint = new Paint('12');
    const result = paint.litres;
    assert.strictEqual(result, '12');
});

xit('should check if it is empty', function() {
    const paint = new Paint('0');
    const result = paint.litres;
    assert.strictEqual(result, '0');
});

