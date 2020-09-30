import { Response, Request } from 'express'
import User from '../../types/user'
import Users from '../../models/users'

const getUsers = async (request: Request, response: Response): Promise<void> => {
    try {
        const users: User[] = await Users.find()
        response.status(200).json({ users })
    } catch (error) {
        throw error
    }
}

const addUser = async (request: Request, response: Response): Promise<void> => {
    try {
        const body = request.body as Pick<User, 'username' | 'password' | 'email' | 'name'>

        const user: User = new Users({
            username: body.username,
            password: body.password,
            email: body.email,
            name: body.name,
        })

        const newuser: User = await user.save()
        const getUsers: User[] = await Users.find()

        response
            .status(201)
            .json({
                message: 'User has been added succesfully',
                user: newuser,
                users: getUsers
            })
    } catch (error) {
        throw error
    }
}

export {
    addUser,
    getUsers,
}
