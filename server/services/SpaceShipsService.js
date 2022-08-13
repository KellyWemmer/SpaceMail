import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SpaceShipsService {
    async getAll(query = {}) {
        return await dbContext.SpaceShips.find(query).populate('creatorInfo', 'name picture')
    }
    async getById(id) {
        const spaceShip = await dbContext.SpaceShips.findById(id).populate('creatorInfo', 'name picture')
        if (!spaceShip) {
            throw new BadRequest('Invalid Hull Id')
        }
        return spaceShip
    }
    async create(body) {
        let spaceShip = await dbContext.SpaceShips.create(body)
        await spaceShip.populate('creatorInfo', 'name picture')
        return spaceShip    
    }

    // async remove(spaceShipId, userId) {
    //     const spaceShip = await this.getById(spaceShipId)
    //     if (spaceShip.creatorId.toString() !== userId) {
    //         throw new Forbidden('You lack the proper documentation to complete this action')
    //     }
    //     await spaceShip.remove()
    //     return spaceShip
    // }
}

export const spaceShipsService = new SpaceShipsService()