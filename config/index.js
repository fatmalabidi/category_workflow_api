import config from './config.js'

export default {
    // will be used to connect to mongoDB (mlab) via mongoose
    getWorkflowDb: function() {
        return `mongodb://${config.mongo.userName}:${config.mongo.pwd}@ds235169.mlab.com:35169/workflow`
    },
    // will be used in tests
    // TODO add test cred in con
    getWorkflowTestDb: function() {
        return `mongodb://${config.mongo.userName}:${config.mongo.pwd}@ds235169.mlab.com:35169/workflow`
    },
}