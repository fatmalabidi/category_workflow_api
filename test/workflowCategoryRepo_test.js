import workflowCategoryRepo from "../infrastructure/mongo/workflowCategoryRepo.js"
import workflowCategory from "../entities/workflowCategory.js"
import assert from "assert"
import mongoose from 'mongoose'
import config from '../config/index.js'


beforeEach(function() {
    mongoose.connect(config.getWorkflowDb());
    var workflowsCat = []
    for (let index = 0; index <= 50; index++) {
        workflowsCat.push({
            name: `mock-name ${index}`,
            description: `desc-mock-${index}`,
            status: index % 5,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        })
    }
    // seed db with mock data 
    workflowCategory.create(workflowsCat)
});

after(function() {
    workflowCategory.remove()
})

describe('Workflow', async function() {
    describe('#getByName', async function() {
        it('valid name', async function() {
            workflowCategoryRepo.getByName("mock-1").then(function(res) {
                assert.notEqual(res.length, 0)
            })
        });
        it('invalid name', async function() {
            workflowCategoryRepo.getByName("invalid-name").then(function(res) {
                assert.equal(res.length, 0)
            })
        });
    });

    describe('#getAll()', function() {
        it('first page with 5 elements', async function() {
            workflowCategoryRepo.getAll(1, 10).then(function(res) {
                assert.equal(res.length, 10)
            })
        });
    })
});