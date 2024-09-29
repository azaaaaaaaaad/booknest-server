import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  origin: "https://booknest-server-one.vercel.app/", // Specify your frontend domain or use '*' to allow all origins
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
  credentials: true, // If you are using credentials like cookies or HTTP authentication
});

// Helper function to run the middleware
export function CorsMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
