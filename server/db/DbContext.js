import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { SpaceShipSchema } from '../models/SpaceShip';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  SpaceShips = mongoose.model('SpaceShip', SpaceShipSchema)
}

export const dbContext = new DbContext()
