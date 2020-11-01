// import config from "./config.json"
// TODO check loading config problem
export default {
    // will be used to connect to mongoDB (mlab) via mongoose
    getWorkflowDb: function() {
        return `mongodb://test:Test123@ds235169.mlab.com:35169/workflow`
    },
}