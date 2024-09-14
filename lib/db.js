import mongoose from "mongoose";
export function dbConnectKaro(){
    try{
let conncet=mongoose.connect('mongodb://127.0.0.1:27017/fridayDB')
console.log('db connect hogye')
console.log(conncet)
    }catch(e){
console.log(e)
    }
}