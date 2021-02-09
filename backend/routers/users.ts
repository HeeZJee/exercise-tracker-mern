export {};
const router = require("express").Router();
const User = require("./../models/users");

router.route("/").get((req: any, res: any) => {
  User.find()
    .then((users: any) => res.status(200).json(users))
    .catch((err: any) => console.log(err));
});

router.route("/add").post((req: any, res: any, next: any) => {
  const username = req.body.username;
  const newUser = new User({ username });
  newUser
    .save()
    .then((user: any) => res.status(200).json(user))
    .catch((err: any) => next(err));
});

module.exports = router;
