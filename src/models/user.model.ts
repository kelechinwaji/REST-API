import mongoose  from "mongoose";
import bcrypt from  'bcrypt';
import config from 'config';

export interface userDocument extends mongoose.Document{
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>
}

const userSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    name:{type: String, required: true},
    password:{type: String, required: true}
},{
    timestamps: true
})

//password hashing algorithm
userSchema.pre('save', async function (next) {
    let user = this as userDocument

    if(!user.isModified("password")){
       return next(); 
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;

    return next();
})

//comparing password for login
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as userDocument;

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}

const UserModel = mongoose.model<userDocument>('User', userSchema);

export default UserModel;