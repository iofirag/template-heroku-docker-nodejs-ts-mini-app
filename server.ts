import mongoose from 'mongoose';
import express from "express";

// Initialise our app
const app = express();

// Lets set our port
/**
 * The default port number is `3000` if Heroku does not provide us a port
 * Take note on that as we will come to that.
 */
app.set("port", process.env.PORT || 3000);

const DBConfig = {
  user: 'admin',
  pass: '1234abcd',
  url: 'ds235417.mlab.com',
  port: 35417,
  databaseName: 'praypay'
};

try {
  // Connect to database
  mongoose.connect(
    // "mongodb://mongo:27017/docker_nodejs_app"
    `mongodb://${DBConfig.user}:${DBConfig.pass}@${DBConfig.url}:${DBConfig.port}/${DBConfig.databaseName}`
    , {
    useNewUrlParser: true,
    useCreateIndex: true
  });
  
  mongoose.connection.on("open", err => {
    if (err) console.log("Error connecting to our mongo database");
    console.log("Connected to mongo database successfully");
  });
} catch (ex) {
  console.log("Can't connect to mongo database");
}

/**
 * To ensure works as it should we will create a
 * simple endpoint to return a json response
 */

// Define our json response
const data = {
  blog_name: "docker_nodejs_app",
  blog_author: "wachira (tesh254)",
  blog_author_twitter: "@wachira_dev",
  isDBConnected: false,
};

// Define out GET request endpoint
app.get("/", (req, res) => {
  data.isDBConnected = !!mongoose.connection
  res.status(200).json(data);
});

// Initialize our server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});