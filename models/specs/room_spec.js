const assert = require('assert');
const Room = require('../room.js');

it('should have an area', function() {
    const room = new Room('10');
    const result = room.size;
    assert.strictEqual(result, '10');
});