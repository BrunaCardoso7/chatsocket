import { Socket } from "socket.io";

export const chatPrivateControle = (socket: Socket) => {
    console.log('user conneted', socket)
    socket.on('chatprivate', (data)=>{
        console.log(data)
    })
}