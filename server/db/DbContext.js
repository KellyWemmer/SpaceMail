import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { SpaceShipSchema } from '../models/SpaceShip.js';
import { PackageSchema } from '../models/Package.js';
import { SPACESHIP } from './Collections.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  SpaceShips = mongoose.model(SPACESHIP, SpaceShipSchema)
  Packages = mongoose.model('Package', PackageSchema)
}

export const dbContext = new DbContext()
