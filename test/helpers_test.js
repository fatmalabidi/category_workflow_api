import assert from "assert"
import helpers from "../helpers/helpers.js"

// TODO add IsValidStatus test
describe('helpers', function() {
    describe('#IsValidStatus', function() {
        describe('valid status 1', function() {
            it('should return true  when the status is positive and less or equal than 5 ', function() {
                assert.equal(helpers.IsValidStatus(1), true);
            });
        });
        describe('invalid status 6', function() {
            it('should return true  when the status  is positive and less ore equal than 5', function() {
                assert.equal(helpers.IsValidStatus(6), false);
            });
        });
        describe('invalid status -1', function() {
            it('should return true  when the status is less oe equal than 5', function() {
                assert.equal(helpers.IsValidStatus(-1), false);
            });
        });
    });
});