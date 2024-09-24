// pages/api/books.js
import connectDB from '../../lib/mongodb';
import Book from '../../models/Book';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      console.log('Fetching books...');
      const books = await Book.find({}); // Fetches documents from the "books" collection
      console.log('Books fetched:', books);
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Failed to fetch books' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
