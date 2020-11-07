import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import config from './config/config.js'
import confReader from './config/index.js'
import workflowcategoryController from './controllers/workflowCategoryController.js'
import workflowController from './controllers/workflowController.js'
import swaggerDocument from './swagger.js'


var app = express();

var port = process.env.PORT || config.server.port

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

mongoose.connect(confReader.getWorkflowDb(config));

workflowcategoryController(app);
workflowController(app);

app.listen(port);