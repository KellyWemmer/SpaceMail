import mongoose from 'mongoose'
import { SPACESHIP } from '../db/Collections.js';
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const PackageSchema = new Schema({
    size: {type: String, required: true},
    spaceShipId: {type: ObjectId, required: true, ref: SPACESHIP},
        
    }, { timestamps: true, toJSON: { virtuals: true } })
