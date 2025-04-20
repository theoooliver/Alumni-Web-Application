module.exports = {
  apps: [
    {
      name: "project2-backend",
      script: "./backend/server.js",
      node_args: "--experimental-modules",
      env: {
        NODE_ENV: "production",
        PORT: 2490,
        MONGODB_URI: "mongodb+srv://Theoooliver:mongopswd@alumnicluster.jh8o4e2.mongodb.net/AlumniApp?retryWrites=true&w=majority"
      }
    },
    {
      name: "project2-swagger",
      script: "./backend/swagger.js",
      node_args: "--experimental-modules",
      env: {
        NODE_ENV: "production",
        PORT: 2456
      }
    }
  ]
};

