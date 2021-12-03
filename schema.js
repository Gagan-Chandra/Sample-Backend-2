const mongoose=require('mongoose');
const {Schema}=mongoose;
const library=new Schema(
{
BName: String,
SName: String,
Due: String
});
module.exports=mongoose.model("Library",library,"Library");