import { User } from "../model/user.model"

export const userSignupServices = async ( body: any ) => User.create(body);