module.exports = {
  apps: [
    {
      name: "backend",
      script: "./backend/server.js",
      env: {
        NODE_ENV: "production",
        PORT: 2490
      }
    },
    {
      name: "swagger",
      script: "./backend/swagger.js",
      env: {
        NODE_ENV: "production",
        PORT: 2456
      }
    }
  ]
};
