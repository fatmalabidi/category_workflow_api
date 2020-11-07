import workflowCategoryRepo from "../infrastructure/mongo/workflowCategoryRepo.js"
import assert from "assert"
import mongoose from 'mongoose'
import config from '../config/index.js'
import setup from './test_setup.js'



before(function() {
    mongoose.connect(config.getWorkflowDb());
    setup.init()
});

after(function() {
    setup.cleanup()
})

describe('WorkflowCategory', async function() {
    describe('#getAll', async function() {
        it('valid request', async function() {
            workflowCategoryRepo.getAll().then(function(res) {
                assert.notEqual(res.length, 0)
            })
        });
    });
});