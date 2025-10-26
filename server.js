import express from 'express'
import mongoose from 'mongoose'
import todoHandler from "./routeHandler/todoHandler.js";

const app = express()

mongoose.connect('mongodb://localhost:27017/crudDB').then(()=> console.log('mongoose connected'))

app.use(express.json())
app.use('/todo', todoHandler)

app.listen(5000, () => {
  console.log('app listen 5000')
})






// hle