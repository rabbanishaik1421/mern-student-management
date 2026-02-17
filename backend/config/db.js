import mongoose, { connect } from "mongoose";

const connectDB = async(req, res)=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;