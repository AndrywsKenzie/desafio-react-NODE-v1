import { Router,Request,Response } from "express";
import multer from "multer";
import { Readable } from "stream";
import  readLine  from "readline";
import { Timestamp } from "typeorm";

const stockRoutes = Router();
const multerConfig = multer()

interface Stock {
    date: Date;
    open: number 
    high: number
    low: number
    volume:number
  
}


stockRoutes.get("/stock");
stockRoutes.post("/stock", multerConfig.single("file"),async (request:Request, response:Response)=>{
   
    const buffer = request.file!.buffer
    const readableFile = new Readable()
    readableFile.push(buffer)
    readableFile.push(null)

    const stockLine = readLine.createInterface({
        input: readableFile
    })

    const stocks: Stock[] = []

    for await (let  line of stockLine){
        const stockLineSplited = line.split(",")
        console.log(stockLineSplited[1])
        stocks.push({
            date: new Date(stockLineSplited[0]),
            open: Number(stockLineSplited[1]) , 
            high: Number(stockLineSplited[2]),
            low: Number(stockLineSplited[3]),
            volume: Number(stockLineSplited[4])        
        })
    }


    return response.send()
});

export default stockRoutes;
