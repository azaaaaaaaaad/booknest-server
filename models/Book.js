
import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, require: true },
  rating: { type: Number, require: true },
  category: { type: String, required: true },
});

const Book = mongoose.models.books || mongoose.model("books", BookSchema);

export default Book;
