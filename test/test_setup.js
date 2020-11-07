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
            _id: mongoose.Types.ObjectId(),
            name: `cat-${index}`,
            parentCategory: mainCategories[index % 10]._id
        })
    }
    workflows.push({
        _id: mongoose.Types.ObjectId(),
        name: "workflow-name",
        description: "workflow-desc",
        status: 1,
    })

    // setup 100 workflowCategories
    for (let index = 0; index < 100; index++) {
        var categoriesIDs = categories.slice(0, 1).map(item => item._id)
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

    // setup 100 workflows
    for (let index = 0; index < 100; index++) {
        var workflowsIDs = workflowsCat.slice(0, 1).map(item => item._id)
        workflows.push({
            name: `workflow-desc-${index}`,
            description: `workflow-desc-${index}`,
            status: 1,
            workflowsCategories: workflowsIDs
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