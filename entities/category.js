import mongoose from "mongoose"

var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    // parentCategory 0..1
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'maincategories'
    },
    // workflowCatorories 0..*
    workflowCatorories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workflowcategories'
    }]
})

var Category = mongoose.model('categories', categorySchema);

export default Category;