export default {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "category workflow",
        "description": "category workflow Application API",
    },
    "host": "127.0.0.1:3000",
    "basePath": "/api/v1",
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],

    "paths": {
        "/workflowcategory": {
            "get": {
                "tags": [
                    "workflowcategory"
                ],
                "description": "gets all workflowcategory with pagination",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "workflowcategory fetshed",

                    }
                }
            }
        },

        "/workflow": {
            "get": {
                "tags": [
                    "workflow"
                ],
                "description": "gets all workflow with pagination",
                "produces": [
                    "application/json"
                ],
                "parameters": [{
                        "name": "page",
                        "in": "query",
                        "description": "the page number (default 1st)",

                    },
                    {
                        "name": "size",
                        "in": "query",
                        "description": "the page size (default 20 documents)",
                    },
                ],
                "responses": {
                    "200": {
                        "description": "workflow fetshed",

                    }
                }
            }
        },
        "/workflow/name": {
            "get": {
                "tags": [
                    "workflow"
                ],
                "description": "gets all workflow by name",

                "produces": [
                    "application/json"
                ],
                "parameters": [{
                    "name": "name",
                    "in": "query",
                    "description": "category name that we want to create",

                }],
                "responses": {
                    "200": {
                        "description": "workflow fetshed",

                    }
                }
            }
        },
        "/workflow/status": {
            "get": {
                "tags": [
                    "workflow"
                ],
                "description": "gets all workflow by status",

                "produces": [
                    "application/json"
                ],
                "parameters": [{
                    "name": "status",
                    "in": "query",
                    "description": "category status that we want to create",

                }],
                "responses": {
                    "200": {
                        "description": "workflow fetshed",

                    }
                }
            }
        },

        "/workflow/categories": {
            "get": {
                "tags": [
                    "workflow"
                ],
                "description": "gets all workflow by categoriesIDS",

                "produces": [
                    "application/json"
                ],
                "parameters": [{
                    "name": "id",
                    "in": "query",
                    "description": "category status that we want to create",

                }],
                "responses": {
                    "200": {
                        "description": "workflow fetshed",

                    }
                }
            }
        },
    }

}