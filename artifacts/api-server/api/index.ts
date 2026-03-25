import { createServer } from "http";
import { parse } from "url";
import app from "../src/app.js";

export default (req: any, res: any) => {
  // Remove the trailing slash for consistency
  const pathname = parse(req.url || "", true).pathname || "/";
  
  // Handle requests
  return new Promise<void>((resolve) => {
    app(req, res);
    res.on("finish", () => resolve());
    res.on("close", () => resolve());
    setTimeout(() => resolve(), 30000); // 30 second timeout
  });
};
