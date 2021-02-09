const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const port: string = process.env.PORT || "5000";

app.use(cors());
app.use(express.json());

// connecting to mongoose
const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Application is running at http://localhost:${port}`);
    });
  })
  .catch((err: any) => console.error(err));

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// app.get("/", (req: any, res: any) => {
//   res.render("Hello");
// });

const exercisesRouter = require("./routers/exercises");
const usersRouter = require("./routers/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});
