export {};
const router = require("express").Router();
const Exercise = require("./../models/exercises");

router.route("/").get((req: any, res: any) => {
  Exercise.find()
    .then((exercises: any) => res.status(200).json(exercises))
    .catch((err: any) => console.log(err));
});

router.route("/add").post((req: any, res: any, next: any) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = new Date();
  const newExercise = new Exercise({ username, description, duration, date });
  newExercise
    .save()
    .then((exercise: any) => res.status(200).json(exercise))
    .catch((err: any) => next(err));
});

module.exports = router;
