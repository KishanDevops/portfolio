import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

const KishanContactSchema: Schema<IContact> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const KishanContact: Model<IContact> =
  mongoose.models.KishanContact ||
  mongoose.model<IContact>("KishanContact", KishanContactSchema);

export default KishanContact;
