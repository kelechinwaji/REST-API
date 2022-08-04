import { type } from 'os';
import {object, string, TypeOf} from 'zod';

export const createUserShema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error:"Name is required"
        }).min(6, "Password too short - should be 6 chars minimum").regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
        passwordConfirmation: string({
           required_error: "password confirmation is required" 
        }),
        email: string({
           required_error: "Email is required" 
        }).email("Not a valid email")
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Password do not match",
        path: ["passwordConfirmation"],
    }),
});


export type CreateUserInput =Omit<TypeOf<typeof createUserShema>, "body.passwordConfirmation">;