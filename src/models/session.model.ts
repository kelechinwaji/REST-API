import mongoose  from "mongoose";
import bcrypt from  'bcrypt';
import config from 'config';
import {userDocument} from './user.model'
import { StringNullableChain } from "lodash";

export interface SchemaDocument extends mongoose.Document{
    user: userDocument['_id'];
    valid: boolean;
    userAgent: String;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    valid:{type: Boolean, default: true},
    userAgent: {type: string},
},{
    timestamps: true
})




const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;