const express = require("express");

const app = express();
app.use(express.json());

const PORT = 5000;

const mainRouter = require("./router/main");

app.use("/main", mainRouter);

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500;
  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`Express server is running port: ${PORT}`);
});
