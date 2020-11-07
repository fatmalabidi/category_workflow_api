import mongoose from "mongoose"
var Schema = mongoose.Schema;

var workflowSchema = new Schema({
    name: String,
    description: String,
    status: Number,
    // 0..*
    workflowsCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'WorkflowCategory'
    }]
})

var Workflow = mongoose.model('Workflow', workflowSchema);

export default Workflow;