import Workflow from '../../entities/workflow.js'

export default {
    getAll: async function(page, size, callback) {
        page = page || 1
        size = size || 20
        return await Workflow.find(function(err, wf) {
                if (err) throw err
                if (callback)
                    callback()
                return wf
            })
            .limit(size * 1)
            .skip((page - 1) * size)
            .exec();
    },
    getByName: async function(queryName, callback) {
        return await Workflow.find({ name: queryName }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback()
            return wf
        })
    },
    gatByStatus: function(queryStatus, callback) {
        Workflow.find({ status: queryStatus }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback()
            return wf
        })
    }

}