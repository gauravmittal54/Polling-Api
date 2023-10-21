const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:eTxTs2Gco5NuuyGTQkJ0@containers-us-west-186.railway.app:6104", {
}).then(() => {
    console.log("Connection is successful");
}).catch((e) => {
    console.log("No connection: ", e);
})
