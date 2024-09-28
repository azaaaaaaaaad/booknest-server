import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"],
  origin: "*",
});

// Helper function to run middleware
export function corsMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
