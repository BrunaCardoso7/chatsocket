import mongoose from "mongoose";

const chatSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
})

export const ChatPrivateModel = mongoose.model('chatprivate', chatSchema) 