const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/polling-api", {
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection: ", e);
})
