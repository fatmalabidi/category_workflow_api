import bodyParser from 'body-parser'
import workflowRepo from '../infrastructure/mongo/workflowRepo.js'
import helpers from "../helpers/helpers.js"


export default function(app) {

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));


    // this endpoint handles get all workflow with pagination (default 1st page with 20 elements)
    app.get('/api/v1/workflow', function(req, res) {
        const { page = 1, size = 20 } = req.query;
        // fn is the callback that will be sent to the repository ti be executed after getting data
        var fn = function(err, wf) {
            if (err) throw err;
            res.send(wf);
        }
        try {
            workflowRepo.getAll(page, size, fn)
        } catch (error) {
            throw error
        }
    })

    // this endpoint handles get workflow by [name]
    app.get('/api/v1/workflow/name', function(req, res) {
        try {
            if (!req.query.name) throw "name can not be empty"
                // fn is the callback that will be sent to the repository ti be executed after getting data
            var fn = function(err, wf) {
                if (err) throw err;
                res.send(wf);
            }
            workflowRepo.getByName(req.query.name, fn)
        } catch (error) {
            throw error
        }
    })

    // this endpoint handles get workflow by [status]
    app.get('/api/v1/workflow/status', function(req, res) {
        try {
            if (!helpers.IsValidStatus(req.query.status)) {
                throw `invalid status ${req.query.status }`
            }
            // fn is the callback that will be sent to the repository ti be executed after getting data
            var fn = function(err, wf) {
                if (err) throw err;
                res.send(wf);
            }
            workflowRepo.gatByStatus(req.query.status, fn)
        } catch (error) {
            throw error
        }
    })

    // this endpoint handles get workflow by cattegories [ids]
    app.get('/api/v1/workflow/categories', async function(req, res) {
        try {
            // res.send(req.query.ids)
            if (!req.query.ids || !helpers.IsValidIds(req.query.ids)) {
                throw `invalid ids ${req.query.ids}`
            }
            // fn is the callback that will be sent to the repository ti be executed after getting data
            var fn = function(err, wf) {
                if (err) throw err;
                res.send(wf);
            }
            var wfc = await workflowRepo.gatByCategories(req.query.ids, fn)
            res.send(wfc)
        } catch (error) {
            throw error
        }
    })
}