import mongoose from "mongoose";
let userSchema=mongoose.Schema({
    name:String,
    password:String
})
export let User=mongoose.models.user||mongoose.model('user',userSchema)