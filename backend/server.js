import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// import connectCloudinary from './config/cloudinary.js'
// import uerRouter from './routes/userRoute.js'

// import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// APP config
const app = express()
const port = process.env.PORT || 4000
// connectDB()
// connectCloudinary()

//middleware
app.use(express.json())
app.use(cors())

// API config
// api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart', cartRouter)

app.use('/api/order',orderRouter)




app.get('/',(req,res)=>{
    res.send("API Working")
})

const startServer = async () =>{
    try {
        await connectDB()
        await connectCloudinary()
        
        app.listen(port, () => {
      console.log('Server started on PORT : ' + port);
    });
    } catch (error) {
         console.error('Server start failed:', error);
    process.exit(1);
        
    }
}

startServer();

export default app;
