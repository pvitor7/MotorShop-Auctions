import AppDataSource from "../../data-source"
import User from "../../entities/User"
import { AppError } from "../../erros/AppError"

const retriveUserService = async (id: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: id
        }
    })

    if ( !user ) {

        throw new AppError("Usuário não encontrado!", 404)

    }

    

    return user
}

export default retriveUserService