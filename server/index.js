import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express();
app.use(express.json()); //Middleware to parse JSON
app.use(cors()); // USED TO ENABLE THE CORS 

//MAKE THE CONNACTION
const costring="mongodb+srv://albusaidia859:admin123@librarydb.mljhcx8.mongodb.net/library_db?retryWrites=true&w=majority&appName=librarydb"
mongoose.connect(costring);
app.listen(3001,()=>{console.log('you are connected')})