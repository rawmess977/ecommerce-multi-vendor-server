import mongoose from 'mongoose';


const dbConnect = async () =>{

    try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    }
    catch(error){
        console.log(error.message)
    }
}

export default dbConnect;