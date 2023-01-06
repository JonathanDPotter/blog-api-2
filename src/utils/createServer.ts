import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import helmet from "helmet";
import config from "../config";
import indexRoutes from "../routes/index.routes";

const createServer = () => {
  const server = express();
  server.use(express.json());
  server.use(
    express.static(
      path.join(
        __dirname,
        config.server.env === "development" || "test"
          ? "../../static"
          : "../../../static"
      )
    )
  );
  // logging with morgan
  server.use(morgan("dev"));
  server.use(cors({ origin: "*" }));
  server.use(helmet());
  server.use(indexRoutes);

  return server;
};

export default createServer;
