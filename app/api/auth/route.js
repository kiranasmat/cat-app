// programming-a set of instructions (commands)

import { NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from "stream";
import {promisify} from 'util';
import { User } from "@/models/user";


async function getRequestType(request){

    let requestKiType = request.headers.get('content-type');
    
    switch(true){

        case requestKiType.includes('json'):{
            let data = await request.json();
            return {
                action:data.action,
                data
            }
        }

        case requestKiType.includes('form'):{
            let data = await request.formData();
            return {
                action:data.get('action'),
                data
            }
        }

    }

}


export async function POST(req){

    let request = await getRequestType(req);

    if(request.action == "signup"){

        let dataBhejo = promisify(pipeline);

        let cf =  process.cwd();

        console.log('signup route, file create honi lagi')

        let meriFile = request.data.get('file');
        console.log(meriFile);
        
        dataBhejo(meriFile.stream(), fs.createWriteStream(cf+'/'+meriFile.name) );
        let user =  User();
        user.name = request.data.get('name')
        user.password = request.data.get('password')
        await user.save();


    }else if(request.action == "login"){

        console.log('yeh logina gya');
        console.log(request.data)

    }
    else if(request.action == "users-lao"){

        let users = await User.find();
        
        return NextResponse.json({
         users
        })
 
     }
 


    let cf = process.cwd();
    
    // let data = await req.formData();

    // let data = await req.json();


    // console.log(data);
    


    return NextResponse.json({success:true});

}


export function GET(req){

    return NextResponse.json([2,3,3]);

}