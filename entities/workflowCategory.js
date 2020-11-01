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
    // categoryID
    // TODO one ID or list? ref to what table?
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})

var WorkflowCategory = mongoose.model('WorkflowCategory', workflowCategorySchema);

export default WorkflowCategory;