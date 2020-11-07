import mongoose from "mongoose"

var Schema = mongoose.Schema;

var workflowCategorySchema = new Schema({
    name: String,
    description: String,
    // date epoch
    createdAt: Number,
    // date epoch
    updatedAt: Number,
    status: Number,
    // list of category 0..*
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }],
    // list of workflow  1..*
    workflows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workflows'
    }]
})

const WorkflowCategory = mongoose.model('workflowcategories', workflowCategorySchema);

export default WorkflowCategory;