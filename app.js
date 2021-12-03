const express=require("express");
const app=express();
const mongoose = require('mongoose');
const
url="mongodb+srv://GaganChandra:GAGAn224@cluster0.ai0ax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const lib=require("./schema");
mongoose.connect(url).then(()=>console.log("Conected to DB"));
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
const name=req.body.BName;
const Rnumber=req.body.SName;
const sub_marks=req.body.Due;
try
{
const st=new lib(
{
BName:name,
SName:Rnumber,
Due:sub_marks
}
)
const savedst=await st.save()
res.json(
{"message":"Student marks are saved","data":savedst}
)
}
catch(err)
{
res.json(err);
}
})
app.use("/",(req,res)=>{
res.send("Gagan")
res.json({
})
}
)
app.listen(3000,()=>console.log("Express Started"))
