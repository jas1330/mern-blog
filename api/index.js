import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();

mongoose.connect(
    process.env.MONGO
)
.then(()=>{
    console.log("Mongodb is connected");
}).catch(err =>{
    console.log(err);
})
//Stopped at 1:19:25
const app=express()
app.use(express.json());
app.listen(3000,()=> {
    console.log('Server is Running on port 3000')
})

//Testing api
app.use('/api/user',userRoutes)
app.use("/api/auth",authRoutes

)