const express = require("express")
const app = express()
const cors = require("cors")
require("./DBConn/conn")
const port = process.env.PORT || 8080
app.use(cors())

app.use(express.json())
app.use(require("./Routes/routes"))

app.listen(port, ()=>{
    console.log(`Server is runnig on port No. ${port}`)
})