import bodyParser from 'body-parser'
import workflowCatRepo from '../infrastructure/mongo/workflowCategoryRepo.js'
import helpers from "../helpers/helpers.js"


export default function(app) {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));

    // this endpoint handles get all WorkflowCategory with pagination (default 1st page with 20 elements)
    app.get('/api/v1/workflowcategory', function(req, res) {
        const { page = 1, size = 20 } = req.query;
        // fn is the callback that will be sent to the repository ti be executed after getting data
        var fn = function(err, wf) {
            if (err) throw err;
            res.send(wf);
        }
        try {
            workflowCatRepo.getAll(fn)
        } catch (error) {
            // throw error
        }
    })

}