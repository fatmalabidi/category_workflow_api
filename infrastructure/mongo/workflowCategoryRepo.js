import WorkflowCategory from '../../entities/workflowCategory.js'

export default {
    // getAll returns a list of WorkflowCategory
    getAll: async function(callback) {
        return await WorkflowCategory.find(function(err, wf) {
                if (err) throw err
                if (callback)
                    callback(err, wf)
                return wf
            })
            .exec();
    },
}