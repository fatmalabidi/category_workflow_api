import workflowRepo from "../infrastructure/mongo/workflowRepo.js"
import workflow from "../entities/workflow.js"
import assert from "assert"
import mongoose from 'mongoose'
import config from '../config/index.js'



beforeEach(function() {
    mongoose.connect(config.getWorkflowTestDb());
    workflow.remove()
    var workflows = []

    for (let index = 0; index < 40; index++) {
        workflows.push({
            name: `mock-${index}`,
            description: "desc-mock-${index}",
            status: index % 5
        })
    }
    workflow.create(workflows)
        // TODO clear data in db
        // TODO seed db with mock data (at least 21 item to test pagination)
});


describe('Workflow', function() {
    describe('#getByName', async function() {
        it('valid name', async function() {

            workflowRepo.getByName("mock-1").then(function(res) {
                assert.notEqual(res.length, 0)
            })
        });
        it('invalid name', async function() {
            workflowRepo.getByName("invalid-name").then(function(res) {
                // TODO change it to assert.equal after adding clean db
                assert.equal(res.length, 0) // res is strictly greater than
            })
        });
    });

    describe('#getAll()', function() {
        it('first page with 5 elements', async function() {
            workflowRepo.getAll(1, 500).then(function(res) {
                console.log(res)
                console.log(res.length)
                assert.equal(res.length, 500)
            })
        });
    });
});