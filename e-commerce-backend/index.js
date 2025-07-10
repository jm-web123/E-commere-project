const express = require("express")
const app = express();
const cors = require("cors");
const connectDatabase = require("./config/connectDatabase")
const product = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(express.json())
app.use(cors());
app.use('/api/v1/',product);
app.use('/api/v1/',orders);



app.listen(5000, function(){
    console.log("Server Started...")
})