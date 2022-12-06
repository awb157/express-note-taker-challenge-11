const router=require('express').Router()
const fs=require("fs")
let data=require("./db/db.json")

router.get("/notes",(req,res)=>{
res.json(data)
})


router.post("/notes",(req,res)=>{
// create request with model
let notemodel={
    title:req.body.title,
    text:req.body.text,
    id: Math.random()
}
data.push(notemodel)
fs.writeFileSync("./db/db.json",JSON.stringify(data))
//after request changes send response back to frount end
res.json(data)
})
module.exports=router