import {DocumentDefinition} from 'mongoose';
import UserModel, {userDocument} from '../models/user.model';


export const createUser = async (input: DocumentDefinition<Omit<userDocument, "createdAt" | "updateAt" | "comparePassword">>)=>{
 try {
    return await UserModel.create(input)
 } catch (e: any) {
    throw new Error(e);
 }
}