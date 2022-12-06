const router=require('express').Router()
const fs=require("fs")
let data=require("./db/db.json")

router.get("/notes",(req,res)=>{
res.json(data)
})


router.get("/notes",(req,res)=>{
    
})
module.exports=router