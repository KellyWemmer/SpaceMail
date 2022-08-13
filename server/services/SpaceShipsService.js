import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class SpaceShipsService {
    remove(spaceShipId, userId) {
        throw new Error('Method not implemented.')
    }

}

export const spaceShipsService = new SpaceShipsService()