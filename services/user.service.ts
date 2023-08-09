import { User } from "../models/user.model";

const userService = {
    async findUserByusername(username: string){
        return await User.findOne({ username: username })
    },

    async addUser(username: string, password: string){
        const newUser = new User({
            username,
            password
        })

        return newUser.save()
    }
}


export default userService