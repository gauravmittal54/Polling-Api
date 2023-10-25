const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://gauravmittal54:Gaurav%402001@cluster0.chlvztj.mongodb.net/polling-api", {
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection: ", e);
})
