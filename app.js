import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import config from './config/config.js'
import seed from './controllers/seedController.js'
import workflowcategoryController from './controllers/workflowCategoryController.js'
import workflowController from './controllers/workflowController.js'
import swaggerDocument from './swagger.js'


var app = express();

var port = process.env.PORT || config.server.port

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(config.getWorkflowDb(config));

seed(app);
workflowcategoryController(app);
workflowController(app);

app.listen(port);