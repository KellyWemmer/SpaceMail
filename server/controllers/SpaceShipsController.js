import BaseController from '../utils/BaseController.js'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { spaceShipsService } from '../services/SpaceShipsService.js'
import { logger } from '../utils/Logger'
import { packagesService } from '../services/PackagesService.js'


export class SpaceShipsController extends BaseController {
    constructor() {
        super('api/spaceships')
        this.router
            .get('', this.getSpaceShips)
            .get('/:spaceShipId/packages', this.getPackagesByShipId)
            .post('', this.createSpaceShip)            
            .use(Auth0Provider.getAuthorizedUserInfo)
    }

    async getSpaceShips(req, res, next) {
        try {
            let spaceShips = await spaceShipsService.getSpaceShips()
            res.send(spaceShips)
        } catch (error) {
            next(error)
        }
    }

    async getPackagesByShipId(req, res, next) {
        try {
            let spaceShipId = req.params.spaceShipId
            let packages = await packagesService.getPackagesByShipId(spaceShipId)
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

