import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
// import packages service

export class PackagesController extends BaseController {
    constructor() {
        super('api/packages')
        this.router
            .post('', this.createPackage)
            
    }
    async createPackage(req, res, next) {
        try {
            let packageData = req.body
            let box = await packagesService.createPackage(packageData)
            res.send(box)            
        } catch (error) {
            next(error)
        }
    }
}