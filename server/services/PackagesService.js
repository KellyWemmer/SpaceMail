import { dbContext } from "../db/DbContext.js"


class PackagesService {
    
    async createPackage(packageData) {
        let box = await dbContext.Packages.create(packageData)
        return box
    }

    async getPackagesByShipId(spaceShipId) {
        let boxes = await dbContext.Packages.find({spaceShipId })
        return boxes
    }
    async getPackages() {
        let spaceShips = await dbContext.Packages.find()
        return spaceShips
    }
}

export const packagesService = new PackagesService()