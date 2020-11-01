import Workflow from '../../entities/workflow.js'

export default {
    getByName: function(queryName, callback) {
        Workflow.find({ name: queryName }, callback)
    },
    gatByStatus: function(queryStatus, callback) {
        Workflow.find({ status: queryStatus }, callback)
    },
    getAll: function(page, size, callback) {
        WorkflowCategory.find(callback)
            .limit(size * 1)
            .skip((page - 1) * size)
            .exec();
    }
}