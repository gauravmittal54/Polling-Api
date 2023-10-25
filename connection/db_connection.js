const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection: ", e);
})
