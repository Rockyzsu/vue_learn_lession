import axios from "axios";
const RequestPath = {
  login: "/users/login",
  signup: "/user/signup",
};

const worker = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 5000,
  headers: {},
});

function startRequest(path, method, params) {
  let config = {};
  if (method == "GET" || method == "get") {
    config.params = params;
  } else {
    config.data = params;
  }

  return worker.request(config);
}

export { worker, startRequest, RequestPath };
