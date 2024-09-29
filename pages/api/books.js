import { corsMiddleware } from "@/corsMiddleware";
import connectDB from "../../lib/mongodb";
import Book from "../../models/Book";

export default async function handler(req, res) {
  // Run the CORS middleware
  await CorsMiddleware(req, res);

  // Connect to the database
  try {
    await connectDB();
  } catch (error) {
    console.error("Database connection error:", error);
    return res.status(500).json({ error: "Database connection error" });
  }

  // Handle GET request
  if (req.method === "GET") {
    try {
      console.log("Fetching books...");
      const books = await Book.find({});
      console.log("Books fetched:", books);
      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Failed to fetch books" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
