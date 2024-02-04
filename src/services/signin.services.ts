import { User } from "../model/user.model";

interface UserInterface {
    username: string,
}

export const signinServices = async ( body: UserInterface ) => {
    try {

        const { username } = body

        const user =  await User.findOne({ username }).select('+password')
        return user;
    } catch (error) {
        console.log(error)
    }
}
export const findByIdService = async ( id: string ) => {
    try {
       const user =  User.findById(id);
       return user
    } catch (error) {
        console.log(error)
    }
}
export const findallservice = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
    }
   
}