const express = require("express")
const router = express.Router()
const TableData = require("../model/tableSchema")

router.post("/add", async(req, res)=>{
    const {name, email, age, city, profession } = req.body
    const userExits = await TableData.findOne({ email: email })
    if(userExits){
        return res.status(422).json({ error: "Email already Exist" })
    } else{
        const getUserDataForAPI = new TableData({name, email, age, city, profession})
        const adddatatoDB = await getUserDataForAPI.save()
        res.send(adddatatoDB)
        console.log(adddatatoDB);
    }
})

router.get("/", async(req, res)=>{
    const getAllData = await TableData.find()
    res.send(getAllData)
})

module.exports = router