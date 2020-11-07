import MainCategory from '../entities/mainCategory.js';
import Category from '../entities/category.js';
import Workflow from '../entities/workflow.js';
import WorkflowCategory from '../entities/workflowCategory.js';
import mongoose from 'mongoose';


// init will add mock data to database for the test
function init() {
    var categories = []
    var mainCategories = []
    var workflows = []
    var workflowsCat = []

    // setup 10 mainCategory
    for (let index = 0; index <= 10; index++) {
        mainCategories.push({
            name: `main-cat-${index}`,
        })
    }
    // setup 20 categories
    for (let index = 0; index <= 20; index++) {
        categories.push({
            name: `cat-${index}`,
            parentCategory: mainCategories[index % 10]._id
        })
    }
    workflows.push({
        _id: mongoose.Schema.Types.ObjectId("workflow-id"),
        name: "workflow-name",
        description: "workflow-desc",
        status: 1,
    })

    // workflowsCat has at least one workflow
    // setup 10 mainCategory
    for (let index = 0; index <= 100; index++) {
        var categoriesIDs = categories.slice(index % 15, index % 15 + 5).map(item => item._id)
        workflowsCat.push({
            name: `workflow-cat-name-${index}`,
            description: `workflow-cat-desc-${index}`,
            status: index % 5,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            workflows: [workflows[0]._id],
            categories: categoriesIDs
        })
    }

    // setup 20 categories
    for (let index = 0; index <= 20; index++) {
        workflows.push({
            name: `workflow-desc-${index}`,
            description: `workflow-desc-${index}`,
            status: 1,
        })
    }
    var callback = function(err, result) {
        if (err) throw err;
        console.log(`done ${typeof(result)}`)
    };
    MainCategory.create(mainCategories, callback);
    Category.create(categories, callback);
    Workflow.create(workflows, callback);
    WorkflowCategory.create(workflowsCat, callback)

}

function cleanup() {
    MainCategory.remove()
    Category.remove()
    Workflow.remove()
    WorkflowCategory.remove()
}

export default {
    init: init,
    cleanup: cleanup
}