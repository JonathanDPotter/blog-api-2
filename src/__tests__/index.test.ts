import supertest from "supertest";
import createServer from "../utils/createServer";
import routes from "../routes/routes.json";

const app = createServer();

describe("index routes", () => {
  describe("GET '/'", () => {
    it("should return the homepage as html", async () => {
      const { statusCode, headers } = await supertest(app).get("/");
      expect(statusCode).toBe(200);
      expect(headers["content-type"]).toMatch(/html/);
    });
  });

  describe("GET '/healthcheck'", () => {
    it("should return a status code of 200", async () => {
      const { statusCode } = await supertest(app).get("/healthcheck");
      expect(statusCode).toBe(200);
    });
  });

  describe("GET '/routes'", () => {
    it("should return the routes.json file", async () => {
      const { statusCode, headers, body } = await supertest(app).get("/routes");
      expect(statusCode).toBe(200);
      expect(headers["content-type"]).toMatch(/json/);
      expect(body).toEqual(routes);
    });
  });
});
