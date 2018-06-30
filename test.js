var assert = require('assert');
var isAmicable = require('./');

assert.strictEqual(isAmicable(220), true);
assert.strictEqual(isAmicable(284), true);
assert.strictEqual(isAmicable(300), false);
assert.strictEqual(isAmicable(1184), true);
