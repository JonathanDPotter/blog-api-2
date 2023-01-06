import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import indexRoutes from "../routes/index.routes";
import config from "../config";

const createServer = () => {
  const server = express();
  server.use(express.json());
  config.server.env === "development"
    ? server.use(express.static(path.join(__dirname, "../../static")))
    : server.use(express.static(path.join(__dirname, "/dist", "../../static")));
  // logging with morgan
  server.use(morgan("dev"));
  server.use(cors({ origin: "*" }));
  server.use(helmet());
  server.use(indexRoutes);

  return server;
};

export default createServer;
