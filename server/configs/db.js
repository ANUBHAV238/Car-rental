import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        mongoose.connection.on("Connected",()=>console.log("Databse connected"))
        await mongoose.connect(`${process.env.MONGODB_URI}/car-rental`)
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB