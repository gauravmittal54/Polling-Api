const express = require('express');
require('./connection/db_connection');
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');


const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
const serverUrl = process.env.SERVER_URL || `https://polling-api-production-8f3b.up.railway.app`;

app.use(express.json());


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Polling-Api',
            version: '1.0.0'
        },
        servers: [
            {
                url: serverUrl,
            },
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

// Use the routes
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);

// Set up Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, (err) => {
    console.log(`server running at : ${serverUrl}`);
});


