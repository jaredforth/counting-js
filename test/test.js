const assert = require('assert');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const dom = new JSDOM(``);

// Write sample unit test

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('setValue', function() {
  it('should return the inner text of a passed element', function() {
    assert.equal(setValue(data, val), 10);
  });
});