import config from './config.js'
// TODO read pwd/user from env orvget it from running args
export default {
    // will be used to connect to mongoDB (mlab) via mongoose
    getWorkflowDb: function() {
        return `mongodb://${config.mongo.userName}:${config.mongo.pwd}@ds033754.mlab.com:33754/workflow`
    },
    // will be used in tests
    getWorkflowTestDb: function() {
        return `mongodb://${config.mongo.userName}:${config.mongo.pwd}@ds123584.mlab.com:23584/workflow_test`
    },
}