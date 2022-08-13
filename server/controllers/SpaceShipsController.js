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
    async getAll(req, res, next) {
        try {
            const query = req.query
            const spaceShips = await spaceShipsService.getAll(query) //where does query come from?
            return res.send(spaceShips)
        } catch (error) {
            logger.log(error)
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const spaceShip = await spaceShipsService.getById(req.params.id)
            return res.send(spaceShip)
        } catch (error) {
            logger.log(error)    
            next(error)        
        }
    }

    async getPackagesOnShip(req, res, next) {
        try {
            let packages = await packagesService.getPackagesOnShip(req.params.id)
            res.send(packages)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            // req.body.creatorId = req.userInfo.id // need to review this? Important
            const spaceShip = await spaceShipsService.create(req.body)
            res.send(spaceShip)            
        } catch (error) {
            logger.log(error)
            next(error)
        }
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

