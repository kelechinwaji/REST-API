import mongoose from "mongoose";
import config from "config"
import logger from "./logger";

const  connect = async () =>{
 const dbUri = config.get<string>("dbUri");

 try {
    await mongoose.connect(dbUri);
    logger.info('Database connected successfully');
    
 } catch (error) {
   logger.error('could not connect to Database');
   process.exit(1)
 }
}

export default connect