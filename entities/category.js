import mongoose from "mongoose"

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MainCategory'
    },
    // workflowCategory 0..1
    workflowCatorories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkflowCategory'
    }
})

var Category = mongoose.model('Category', categorySchema);

export default Category;