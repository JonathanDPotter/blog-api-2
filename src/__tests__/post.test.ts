import * as PostService from "../services/post.service";
import supertest from "supertest";
import createServer from "../utils/createServer";
import signJWT from "../utils/signJWT";

const app = createServer();

const userInput = {
  username: "Test User",
  password: "Password123",
};

const postInput = {
  userId: "63af5daad13b0e40253d9a1a",
  title: "title",
  body: "body",
  published: true,
};

const postPayload = {
  username: "Test User",
  _id: "63adaad517bbb1c2dc885c37",
  createdAt: "2022-12-29T14:57:25.786Z",
  updatedAt: "2022-12-29T14:57:25.786Z",
  __v: 0,
};

describe("post", () => {
  describe("post creation", () => {
    describe("given the inputs are valid", () => {
      it("should return the post payload", async () => {
        const createPostServiceMock = jest
          .spyOn(PostService, "createPost")
          // @ts-ignore
          .mockReturnValueOnce(postPayload);

        const jwt = await signJWT(userInput);

        const { statusCode, body } = await supertest(app)
          .post("/api/post")
          .set({ Authorization: `Bearer ${jwt}` })
          .send(postInput);

        expect(statusCode).toBe(200);
        expect(body).toEqual(postPayload);
        expect(createPostServiceMock).toHaveBeenCalledWith(postInput);
      });
    });

    describe("given the post service throws", () => {
      it("should return a 409 error ", async () => {
        const createPostServiceMock = jest
          .spyOn(PostService, "createPost")
          .mockRejectedValueOnce("oh no :(");

        const jwt = await signJWT(userInput);

        const { statusCode } = await supertest(app)
          .post("/api/post")
          .set({ Authorization: `Bearer ${jwt}` })
          .send({
            userId: null,
            title: null,
            body: "body",
            published: true,
          });

        expect(statusCode).toBe(500);
        expect(createPostServiceMock).toHaveBeenCalled();
      });
    });
  });
});
