import BaseController from '../utils/BaseController'
import { packagesService } from '../services/PackagesService'

export class PackagesController extends BaseController {
    constructor() {
        super('api/packages')
        this.router
            .get('/all', this.getPackages)
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

    async getPackages(req, res, next) {
        try {
            let packages = await packagesService.getPackages()
            res.send(packages)
        } catch (error) {
            next(error)
        }
    }
}