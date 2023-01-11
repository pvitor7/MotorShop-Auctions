import { Request, Response } from "express"
import listVehicleService from "../../services/vehicle/listVehicle.service"

const listVehicleController = async (req: Request, res: Response) => {

    const vehicles = await listVehicleService()

    return res.json(vehicles)
}

export default listVehicleController