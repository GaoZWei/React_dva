
export default {
  "proxy": {
  "/api": {
    "target": "https://jsonplaceholder.typicode.com",
      "changeOrigin": true,
    // "headers":{
    //   "host":"localhost:8080/exampleone/"
    // },
      "pathRewrite": {
      "^/api": ""
    }
  }
}
};
