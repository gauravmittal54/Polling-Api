const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Polling-Api',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:8000/'
            }
        ],
        components: {
            schemas: {
                Option: {
                    type: 'object',
                    properties: {
                        text: {
                            type: 'string'
                        },
                        votes: {
                            type: 'integer'
                        },
                        link_to_vote: {
                            type: 'string'
                        },
                        question_id: {
                            type: 'string',
                            format: 'uuid'
                        }
                    },
                    required: ['text', 'votes', 'question_id']
                },
                Question: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string'
                        },
                        options: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/Option'
                            }
                        }
                    },
                    required: ['title']
                }
            }
        }
    },
    apis: ['./routes/*']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
