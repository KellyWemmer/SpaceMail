import BaseController from '../utils/BaseController.js'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { spaceShipsService } from '../services/SpaceShipsService.js'
import { logger } from '../utils/Logger'

export class SpaceShipsController extends BaseController {
    constructor() {
        super('api/spaceships')
        this.router
            .get('', this.getAll) //endpoint: http://localhost:3000/api/spaceships
            .get('/id', this.getById) //endpoint: http://localhost:3000/api/spaceships/id 
            .get('/:id/packages', this.getPackagesOnShip) //endpoint: http://localhost:3000/api/spaceships/1/packages 
            // .use(Auth0Provider.getAuthorizedUserInfo) --where does this come from?
            .post('', this.create)
            .delete('/id', this. remove)
    }
    getAll(arg0, getAll) {
        throw new Error('Method not implemented.')
    }
    getById(arg0, getById) {
        throw new Error('Method not implemented.')
    }
    getPackagesOnShip(arg0, getPackagesOnShip) {
        throw new Error('Method not implemented.')
    }
    create(req, res, next) {
        throw new Error('Method not implemented.')
    }
    async remove(req, res, next) {
        try {
            const spaceShipId = req.params.id
            const userId = req.params.id //the user who is logged in
            await spaceShipsService.remove(spaceShipId, userId)
            return res.send('This ship has been decommissioned')
        } catch (error) {
            logger.log(error)
            next(error)
        }
    }
}

