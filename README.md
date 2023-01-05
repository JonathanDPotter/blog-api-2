# Blog-API-2

This is the back-end api for the Odin Project blog project. I finished this several months ago, but I decided to go back and refactor it for cleaner code and better functionality. hence the "2" in the name. It handles full CRUD functionality and local authentication for a front-end blog which hasn't yet been updated to utilize it.

---

## Technologies Used

This api is written in typescript with express. It manages a MongoDB Atlas database using mongoose. It uses jsonwebtoken to authenticate users and zod to validate input.

---

## API Routes

The api routes are as follows:

```json
{
  "user": {
    "ROOT": "/api/user",
    "GET": {
      "/": "returns all user records",
      "/:_id": "returns user record with specific _id"
    },
    "POST": {
      "/register": "creates a new user from {username, password}",
      "/login": "returns validation token from {username, password}",
      "/validate": "returns a 200 status if the token is provided and still valid"
    },
    "DELETE": {
      "/:_id": "deletes user with specific _id, requires auth as Bearer token"
    }
  },
  "post": {
    "ROOT": "/api/post",
    "GET": {
      "/": "returns all post records",
      "/:_id": "returns post record with specific _id",
      "/user/:_id": "returns all posts with specific author"
    },
    "POST": {
      "/": "creates a new post record with {title, upcs}, requires auth as Bearer token"
    },
    "PATCH": {
      "/:_id": "updates post record with specific _id, requires auth as Bearer token"
    },
    "DELETE": {
      "/:_id": "deletes post with specific _id, requires auth as Bearer token"
    }
  },
  "index": {
    "root": "/",
    "GET": {
      "/": "returns the homepage",
      "/routes": "returns this object",
      "/healthcheck": "returns a 200 status"
    }
  }
}
```

---

## Functionality

This app handles all of the back-end database management and authentication for the front-end react app where users can write, edit, publish, and delete posts for the blog. Authentication is handled by issuing json web tokens and then verifying that the user has a valid unexpired token before allowing writing, editing, and deleting actions. 

*note: the app pictured below is still using the old version of this API-not this updated version

![image](https://user-images.githubusercontent.com/30156468/167709749-baf6b890-6e25-4150-b88f-840ddd2f01e5.png)
