import mongoose from "mongoose"
var Schema = mongoose.Schema;

var workflowSchema = new Schema({
    name: String,
    description: String,
    status: Number,
})

var Workflow = mongoose.model('Workflow', workflowSchema);

export default Workflow;