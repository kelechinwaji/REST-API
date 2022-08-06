import { compare } from 'bcrypt';
import {omit} from 'lodash'
import {DocumentDefinition} from 'mongoose';
import UserModel, {userDocument} from '../models/user.model';



export const createUser = async (input: DocumentDefinition<Omit<userDocument, "createdAt" | "updateAt" | "comparePassword">>)=>{
 try {
    const user = await UserModel.create(input)
    return omit(user.toJSON(), 'password')
 } catch (e: any) {
    throw new Error(e);
 }
}

export const validatePassword = async ({email, password}:{email: string, password: string}) =>{
const user = await UserModel.findOne({email})

if (!user){
   return false
}

const isValid = await user.comparePassword(password)

return omit(user.toJSON(), 'password')
}  