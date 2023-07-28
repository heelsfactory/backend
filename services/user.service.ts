import { User } from "../models/user.model";

const userService = {
    async findUserByusername(username: string){
        return await User.findOne({ username: username })
    }
}


export default userService