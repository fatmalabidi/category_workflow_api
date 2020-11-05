import workflowRepo from "../infrastructure/mongo/workflowRepo.js"
import workflow from "../entities/workflow.js"
import assert from "assert"
import mongoose from 'mongoose'
import config from '../config/index.js'



before(function() {
    mongoose.connect(config.getWorkflowDb());
    var workflows = []
        // seed the db with mock testdata
    for (let index = 0; index < 40; index++) {
        workflows.push({
            name: `mock-${index}`,
            description: `desc-mock-${index}`,
            status: index % 5
        })
    }
    workflow.create(workflows)
});

after(function() {
    workflow.remove()
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
        it('first page with 50 elements', async function() {
            workflowRepo.getAll(1, 50).then(function(res) {
                assert.equal(res.length, 50)
            })
        });
    });
});