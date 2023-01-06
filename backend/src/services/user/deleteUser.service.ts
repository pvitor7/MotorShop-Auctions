import AppDataSource from "../../data-source"
import User from "../../entities/User"
import { AppError } from "../../erros/AppError"


const softDeleteUserService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: id})

    if ( !user ) {
        throw new AppError("Usuário não encontrado!", 404)
    }

    if (!user.is_active) {
        throw new AppError("Usuário desativado.", 404)
    }

    user.is_active = false

    await userRepository.save(user)
    
    return user 
}

export default softDeleteUserService
