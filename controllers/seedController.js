import Workflow from '../entities/workflow.js';
import WorkflowCategory from '../entities/workflowCategory.js';

export default function(app) {
    //add an endpoint and seed the db with mock data
    app.get('/api/v1/seed/workflowcategory', function(req, res) {
        var index = Math.random()
        var workflowCategories = [{
                name: `mock-name ${index}`,
                description: "desc-mock-1",
                status: 1,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },
            {
                name: `mock-name-2 ${index}`,
                description: "desc-mock-1",
                status: 2,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            },

        ]


        // this [callback] will be sent to the [create] function to be executed 
        var callback = function(err, result) {
            if (err) throw err;
            res.send(result)
        };
        WorkflowCategory.create(workflowCategories, callback);
    });

    app.get('/api/v1/seed/workflow', function(req, res) {
        var index = Math.random()
        var workflows = [{
                    name: `mock-name ${index}`,
                    description: "desc-mock-1",
                    status: 1
                },
                {
                    name: "mock-2",
                    description: "desc-mock-2",
                    status: 2
                },
                {
                    name: "mock-3",
                    description: "desc-mock-3",
                    status: 3
                }
            ]
            // this [callback] will be sent to the [create] function to be executed 
        var callback = function(err, result) {
            if (err) throw err;
            res.send(result)
        };
        Workflow.create(workflows, callback)
    });
}