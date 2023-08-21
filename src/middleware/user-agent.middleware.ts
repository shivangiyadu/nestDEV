import { NextFunction } from "express";

function userAgent(req:Request,next:NextFunction){
    const ua=req.headers['user-agent']
    console.log(ua);

    req["ua"]=ua;
    next();
}