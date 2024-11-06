import mongoose from 'mongoose'
import { Prdouct } from './product.models'
const orderItemSchema= new mongoose.Schema({
  prdouctId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',

},
quantity:{
  type:Number,
  required:true,
},
})
const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true,

  },
  customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  },
  orderItems:{
    type:[orderItemSchema]s
  },
  address:{
    type:String,
    required:true,
  },
  status:{
    type:String,
    enum:['Pending','Canclled','Delivered'],
    default:'Pending',

  }
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)
