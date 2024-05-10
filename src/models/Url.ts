import mongoose, { Schema, Document } from "mongoose";

export interface Url extends Document {
  originalUrl: string;
  shortId: string;
}

const urlSchema: Schema<Url> = new Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Url =
  (mongoose.models.Url as mongoose.Model<Url>) ||
  mongoose.model("Url", urlSchema);

export default Url;
