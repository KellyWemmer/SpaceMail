import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SpaceShipsService {
    async getAll(query = {}) {
        return await dbContext.SpaceShips
    }
    getById(id) {
        throw new Error('Method not implemented.')
    }
    create(body) {
        throw new Error('Method not implemented.')
    }
    remove(spaceShipId, userId) {
        throw new Error('Method not implemented.')
    }

}

export const spaceShipsService = new SpaceShipsService()