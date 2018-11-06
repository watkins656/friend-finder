let express = require('express');
let path = require('path');
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a port to listen for incoming requests
var PORT = 8080;

require("./app/routing/apiRoutes")(app);
require('./app/routing/htmlRoutes')(app);


//  Connect all our routes to our application

// Turn on that server!



// Create a generic function to handle requests and responses
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
