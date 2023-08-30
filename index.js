const express = require("express");
require('./connection/db_connection');
const questionRoutes = require('./routes/questionRoutes');
const optionRoutes = require('./routes/optionRoutes');
const routes = require('./routes/optionRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(routes)

// Use the routes
app.use('/questions', questionRoutes);
app.use('/options', optionRoutes);


app.listen(port,(err)=>{
    console.log(`localhost running at port : ${port}`);
});