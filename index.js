const express = require('express');
require('./connection/db_connection');
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerUi/swaggerConfig'); 

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Use the routes
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);

// Set up Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, (err) => {
    console.log(`localhost running at port: ${port}`);
});
