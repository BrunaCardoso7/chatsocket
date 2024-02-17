import { ChatPrivateModel } from "../../model/chat.model"

export type chatDataProps = {
    name: string,
    message: string
}

export const chatPrivateService = async ( data: chatDataProps ) => {
    try {
        console.log('message adicionada no banco de dados com sucesso')
        await ChatPrivateModel.create(data)
    } catch (error) {
        console.error(error, 'falha no armazenamento da mensagem')
    }
}