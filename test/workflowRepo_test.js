import workflowRepo from "../infrastructure/mongo/workflowRepo.js"
import setup from './test_setup.js'
import assert from "assert"
import mongoose from 'mongoose'
import config from '../config/index.js'


before(function() {
    mongoose.connect(config.getWorkflowDb());
    setup.init()
});

after(function() {
    // setup.cleanup()
})

describe('WorkflowCategory', function() {
    describe('#getByName', async function() {
        it('valid name', async function() {
            workflowRepo.getByName("mock-1").then(function(res) {
                assert.notEqual(res.length, 0)
            })
        });
        it('invalid name', async function() {
            workflowRepo.getByName("invalid-name").then(function(res) {
                assert.equal(res.length, 0)
            })
        });
    });
    describe('#getByStatus', async function() {
        it('valid status', async function() {
            workflowRepo.gatByStatus(1).then(function(res) {
                assert.notEqual(res.length, 0) // TODO change bu greater Than ...
            })
        });
        it('invalid status', async function() {
            workflowRepo.getByName(6).then(function(res) {
                assert.equal(res.length, 0) // no check for the status in the db layer, but the result length should be 0
            })
        });
    });

    describe('#getAll()', function() {
        it('first page with 10 elements', async function() {
            workflowRepo.getAll(1, 10).then(function(res) {
                assert.equal(res.length, 10)
            })
        });
    });
});