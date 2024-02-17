import { Socket } from "socket.io";
import { chatPrivateService } from "../../services/websocket/chat.ws.service";
import { chatDataProps } from "../../services/websocket/chat.ws.service";

export const chatPrivateControler = (socket: Socket) => {
    // console.log('user conneted', socket)
    socket.on('chatprivate', async (data: chatDataProps) => {
        try {
            if(!data){
                throw new Error('Error non-conforming data')
            }
            console.log('name: ' + data.name, 'message: ' + data.message)
            await chatPrivateService(data)
        } catch (error) {
            console.log(error, 'não conseguimos entrar em conexão com o service reponsável')
        }
    })
}       