import { Schema, model } from "mongoose";
import IBook from "../../types/book";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    quantity: {
      type: Number,
      required: true
    },
    available_stock: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      trim: true
    },
    is_deleted: {
      type: Boolean,
      default: false
    },
    authors: {
      type: [{ type: Schema.Types.ObjectId, ref: "Author" }] // One Way Embedding
    },
    genres: {
      type: [{ type: Schema.Types.ObjectId, ref: "Genre" }] // One Way Embedding
    }
  },
  { versionKey: false, timestamps: true }
);

export default model<IBook>("Book", bookSchema);

/*

NOTE:

Establish Relationship Balance

Establish the maximum size of N and the size of M. 
For example if N is a maximum of 3 categories for a book and M is a maximum of 500000 books in a category 
you should pick One Way Embedding. 
If N is a maximum of 3 and M is a maximum of 5 then Two Way Embedding might work well.

*/
