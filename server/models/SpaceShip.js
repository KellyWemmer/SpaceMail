import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpaceShipSchema = new Schema(
    {
      name: { type: String, required: true },
      captain: { type: String, required: true },
      img: {type: String, default: 'https://thiscatdoesnotexist.com'},

      //to define relationships
      creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true } //ref in dbContext
    },
    { timestamps: true, toJSON: { virtuals: true } }
  )
  
  