import WorkflowCategory from '../../entities/workflowCategory.js'

export default {
    getAll: async function(page, size, callback) {
        return await WorkflowCategory.find(function(err, wf) {
                if (err) throw err
                if (callback)
                    callback(err, wf)
                return wf
            })
            .limit(size * 1)
            .skip((page - 1) * size)
            .exec();
    },
    getByName: async function(queryName, callback) {
        return await WorkflowCategory.find({ name: queryName }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    },
    gatByStatus: async function(queryStatus, callback) {
        return await WorkflowCategory.find({ status: queryStatus }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    },

}