const express = require("express")
const mongoose = require("mongoose")

const TableSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    city:{
        type:String
    },
    profession:{
        type:String
    }   
})

module.exports = TableData = mongoose.model("TableData", TableSchema)