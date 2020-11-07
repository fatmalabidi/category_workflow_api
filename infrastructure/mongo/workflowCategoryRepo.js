import WorkflowCategory from '../../entities/workflowCategory.js'
import mongoose from "mongoose"

export default {
    // getAll returns a list of WorkflowCategory
    getAll: async function(callback) {
        return await WorkflowCategory.find(function(err, wf) {
                if (err) throw err
                if (callback)
                    callback(err, wf)
                return wf
            }).populate({
                path: "workflows",
            })
            .exec();
    },

    // getByCategory returns a list of WorkflowCategory with the given categories IDS
    getByCategories: async function(catIDs, callback) {
        return await WorkflowCategory.find({ workflowcategories: { $in: catIDs } }, function(err, wf) {
            if (err) throw err
            if (callback)
                callback(err, wf)
            return wf
        })
    },
}