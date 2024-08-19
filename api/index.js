var express = require('express');
var app = express();
const cors = require("cors");
require('dotenv').config();

const IN_PROD = process.env.NODE_ENV === 'production'
const SESS_PERIOD = 1000 * 60 * 60 * 2;



const PORT = 3001;
global.__basedir = __dirname;


app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.use("/api/mail", require("./routes/mail"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname + '/build'));
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '/build/index.html'), function (err) {
            if (err) {
                res.status(500).send(err)
            }
        })
    })
    app.listen();
} else {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
}