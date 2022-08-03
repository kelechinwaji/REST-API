import mongoose from "mongoose";
import config from "config"

const  connect = async () =>{
 const dbUri = config.get<string>("dbUri");

 try {
    await mongoose.connect(dbUri);
    console.log('Database connected successfully');
    
 } catch (error) {
   console.log('could not connect to Database');
   process.exit(1)
 }
}

export default connect