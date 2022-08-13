import { dbContext } from '../db/DbContext'


class SpaceShipsService {
    async getSpaceShips() {
        let spaceShips = await dbContext.SpaceShips.find()
        return spaceShips
    }
    
    async createSpaceShip(spaceShipData) {
        let spaceShip = await dbContext.SpaceShips.create(spaceShipData)
        return spaceShip
    }
}

export const spaceShipsService = new SpaceShipsService()