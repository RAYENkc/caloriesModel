// 1. Import dependencies
const express = require("express");
const cors = require("cors");
let {PythonShell} = require('python-shell')
let options={
    // scriptPath : "C:/Users/Rayen/Desktop/project_partie3/app",
    args:["john",45]
}


require("dotenv").config();

// 2. Setup app and middleware
const app = express();
app.use(cors());
app.use(express.json());

PythonShell.run("modelLoad.py",options,function(err,results){
    if (err) console.log(err)
    if (results) console.log(results)
})

app.get('/home', function(req, res) {
    request('http://127.0.0.1:4000/flask', function (error, response, body) {
        console.error('error:', error); // Print the error
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the data received
        res.send(body); //Display the response on the website
      }); 

    
});

// 3.Start server
// process.env.PORT ||
const port = 5000
app.listen(port, () => {
    console.log(`Serveur listening on port ${port}`);
});