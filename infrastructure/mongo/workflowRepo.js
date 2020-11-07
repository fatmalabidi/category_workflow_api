import Workflow from '../../entities/workflow.js'

export default {
    // getAllreturns a list of [Workflow] with pagination, default page=1, pageSize=20
    getAll: async function(page, size, callback) {
        page = page || 1
        size = size || 20
        return await Workflow.find(function(err, wf) {
                if (err) throw err
                if (callback)
                    callback(err, wf)
                return wf
            })
            .limit(size * 1)
            .skip((page - 1) * size)
            .exec();
    },
    // getByName gets a [Workflow] based on a the [workflowName]
    getByName: async function(workflowName, callback) {
        return await Workflow.find({ name: workflowName }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    },
    // gatByStatus gets a [Workflow] based on a the [workflowStatus]
    gatByStatus: async function(workflowStatus, callback) {
        return await Workflow.find({ status: workflowStatus }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    },
    // gatByCategories gets list of [Workflow] based on the list of [categories] ID
    gatByCategories: async function(categories, callback) {
        var obj_ids = categories.map(function(id) { return ObjectId(id); });
        return await Workflow.find({ _id: { $in: obj_ids } }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    }
}