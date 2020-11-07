import mongoose from "mongoose"
var Schema = mongoose.Schema;

var workflowSchema = new Schema({
    name: String,
    description: String,
    status: Number,
    // workflowcategories  0..*
    workflowcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workflowcategories'
    }]
})

var Workflow = mongoose.model('workflows', workflowSchema);

export default Workflow;