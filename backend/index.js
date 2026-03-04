import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 8000;


const startServer = async() => {
    try {

        await connectDB();

        const server = app.listen(PORT,() =>{
            console.log(`Server is running on port: ${PORT}`)
        });

        server.on("Error",(error) => {
            console.log("Error after starting the server: ",error);
            process.exit(1);
        });

    } catch (error) {
        console.log("An error occured: ",error);
        
    }
}

startServer();
