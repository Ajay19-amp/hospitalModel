import mongoose, { Types } from 'mongoose';
const porductSchema = new mongoose.Schema(
  {
    discription: {
      type: String,
      required: true,
    },
    name: {
      type: string,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
  }
  { timestamps: ture }
);

export const Prdouct = mongoose.model('Product', porductSchema);
