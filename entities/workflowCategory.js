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
    // list of categoryID 0..*
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    // list of workflowID  1..*
    workflows: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workflow'
    }]
})

const WorkflowCategory = mongoose.model('WorkflowCategory', workflowCategorySchema);

export default WorkflowCategory;