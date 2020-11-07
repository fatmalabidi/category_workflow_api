# category_workflow_api
a simple API that deals with category/parent category workflow using mongoDB

### Requirements
* Node Package Manager: [npm](https://www.npmjs.com/get-npm)
* [NodeJS](https://nodejs.org/en/download/)   
**NOTE:**   
Do Not forget to setup the connection string for both databases for `test` and `prod` in the `config.js` file
### Setup the envirement
1.  Install our dependencies  
```shell
npm install  
```  

2. Use [mlab](https://mlab.com/) to create your noSql database and get your connection string to be able to connect to it using `mongoose`.    
Or you can use mongo compass in your local machine.      
**NOTE:** do not forget to replace the connection string in the config file.
### Run the tests

```shell
npm test  
```  
### Test the API
you can test this API using swagger-ui using [this link](http://127.0.0.1:3000/api-docs) (or any api client like postman)
