const express = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/tableview")
.then(()=>{
    console.log("Server Connected to DB")
}).catch((err)=>{
    console.log(err)
})