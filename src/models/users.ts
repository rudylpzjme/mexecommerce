import User from '../types/user'
import { model, Schema } from 'mongoose'

const usersSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

export default model<User>('Users', usersSchema)
