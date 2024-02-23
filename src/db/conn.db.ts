import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db = async () => {
    try {
        await mongoose.connect(`mongodb+srv://obitadrawing:3QvqHzS0kMrnytQa@cluster0.57qp771.mongodb.net/?retryWrites=true&w=majority`);
        console.log(`Conexão bem-sucedida ao banco de dados`);  
    } catch (error) {
        console.error('Erro na conexão com o banco de dados:', error);
    }
};

db();