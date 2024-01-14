const express = require('express');
const cors=require('cors')
const data=require('./jsondata.json')


//const filterData=require('./controllers/filterData')

const app=express()
const PORT=process.env.PORT || 3000


app.use(cors())
app.use(express.json())

//app.post('/activefilter',(req,res)=>{
//    filterData.handleFilters(req,res,data)
//})

app.get('/getData',(req,res)=>{
    res.send(data.activefilter)
    
})
console.log("data sent")
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})