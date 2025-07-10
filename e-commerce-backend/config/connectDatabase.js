const mongoose = require("mongoose")


const connectDatabase = () =>{
    mongoose.connect("mongodb://localhost:27017/").then(() => {
console.log("MongoDB Connected..")
    })
};

module.exports = connectDatabase;