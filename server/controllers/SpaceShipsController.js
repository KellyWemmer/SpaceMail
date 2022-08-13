import BaseController from '../utils/BaseController.js'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { spaceShipsService } from '../services/SpaceShipsService.js'
import { logger } from '../utils/Logger'
//import packages service


export class SpaceShipsController extends BaseController {
    constructor() {
        super('api/spaceships')
        this.router
            .get('', this.getSpaceShips)
            .get('/:spaceshipId/packages', this.getPackagesByCourseId)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createSpaceShip)            
    }
    async getSpaceShips(req, res, next) {
        try {
            let spaceShips = await spaceShipsService.getSpaceShips()
        } catch (error) {
            
        }
    }
    async getPackagesByCourseId(req, res, next) {
        try {
            let packages = await packagesService.getPackagesByCourseId(req.params.spaceShipId)
            res.send(packages)
        } catch (error) {
            
        }
    }
    async createSpaceShip(req, res, next) {
        try {
            let spaceShipData = req.body
            let spaceShip = await spaceShipsService.createSpaceShip(spaceShipData)
            res.send(spaceShip)
        } catch (error) {
            next(error)
            
        }
    }
   
}

