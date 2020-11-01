import WorkflowCategory from '../../entities/workflowCategory.js'

export default {
    getAll: function(page, size, callback) {
        WorkflowCategory.find(callback)
            .limit(size * 1)
            .skip((page - 1) * size)
            .exec();
    },
    getByName: function(queryName, callback) {
        WorkflowCategory.find({ name: queryName }, callback)
    },
    gatByStatus: function(queryStatus, callback) {
        WorkflowCategory.find({ status: queryStatus }, callback)
    },

}