const mongoose = require("mongoose")


const connectDatabase = () =>{
    mongoose.connect("mongodb+srv://manjupriyaj95:1992@cluster0.9phszst.mongodb.net/text?retryWrites=true&w=majority&appName=Cluster0").then(() => {
console.log("MongoDB Connected..")
    })
};

module.exports = connectDatabase;