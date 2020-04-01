import { Document } from "mongoose";
import IAuthor from "./author";
import IGenre from "./genre";

export default interface IBook extends Document {
  title: string;
  description: string;
  quantity: number;
  available_stock: number;
  image: string | null;
  authors: string[] | IAuthor[];
  genres: string[] | IGenre[];
}

export interface IBookRequest extends IBook {
  genres_ids: string[];
  authors_ids: string[];
}
