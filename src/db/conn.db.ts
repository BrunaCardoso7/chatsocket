import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const secret = process.env.PASSWORD

const db = async () => {
    try {
        await mongoose.connect(`mongodb+srv://obitadrawing:MkG6hcFr69u3pkRs@cluster0.tknmry0.mongodb.net/?retryWrites=true&w=majority`);
        console.log(`Conexão bem-sucedida ao banco de dados`);
    } catch (error) {
        console.error('Erro na conexão com o banco de dados:', error);
    }
};

db();