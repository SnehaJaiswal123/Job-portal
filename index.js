import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
const Port=process.env.PORT||8080
app.listen(Port,console.log(`Server is running on ${Port}`))