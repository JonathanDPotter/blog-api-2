class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>Blog-API</h1>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkName = this.getAttribute("link-name") || "broken";

    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>
      <a href="/${linkName}">${linkName}</a>
    </footer>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

const routes = {
  user: {
    ROOT: "/api/user",
    GET: {
      "/": "returns all user records",
      "/:_id": "returns user record with specific _id",
    },
    POST: {
      "/register": "creates a new user from {username, password}",
      "/login": "returns validation token from {username, password}",
      "/validate":
        "returns a 200 status if the token is provided and still valid",
    },
    DELETE: {
      "/:_id": "deletes user with specific _id, requires auth as Bearer token",
    },
  },
  post: {
    ROOT: "/api/post",
    GET: {
      "/": "returns all post records",
      "/:_id": "returns post record with specific _id",
      "/user/:_id": "returns all posts with specific author",
    },
    POST: {
      "/": "creates a new post record when supplied with an object that has   userId: UserDocument['_id']; title: string; body: string; published: boolean; and requires auth as Bearer token",
    },
    PUT: {
      "/:_id":
        "updates post record with specific _id, requires auth as Bearer token",
    },
    DELETE: {
      "/:_id": "deletes post with specific _id, requires auth as Bearer token",
    },
  },
  index: {
    root: "/",
    GET: {
      "/": "returns the homepage",
      "/routes": "returns this object",
      "/healthcheck": "returns a 200 status",
    },
  },
};

const routesContainer = document.getElementsByClassName("routes");

const keys = Object.keys(routes);

const values = Object.values(routes);

routesContainer[0].innerHTML = keys.map(
  (key, i) =>
    `<h3>${key}:</h3> <p class="route-list">${JSON.stringify(values[i])
      .replace(/},/g, "}, <br />")
      .replace(/{/g, "{ <br />")
      .replace(/",/g, '", <br />')
      .replace(/}/g, "} <br/> }")
      .replace(/:/g, " : ")}</p>`
);
