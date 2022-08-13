import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const PackageSchema = new Schema({
    size: {type: String, required: true},

    spaceShipId: {type: Schema.Types.ObjectId, required: true, ref: 'SpaceShip'},
        
    }, { timestamps: true, toJSON: { virtuals: true } })
