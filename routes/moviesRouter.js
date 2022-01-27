const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.movie.findAll().then((movies) => {
    res.status(200).json(movies);
  });
});

router.get("/:movieId", (req, res) => {
  sequelize.models.movie.findByPk(req.params.movieId).then((movie) => res.json(movie));
});

router.delete("/:movieId", (req, res) => {
  sequelize.models.movie
    .destroy({
      where: { id: req.params.movieId },
    })
    .then(() => res.json({ msg: `Film ${req.params.movieId} supprimé` }));
});

router.post("/", (req, res) => {
  console.log("passed ni", req.body);
  sequelize.models.movie.create(req.body).then((movieCreated) => {
    res.status(201).json(movieCreated);
  });
});

router.patch("/:movieId", (req, res) => {
  sequelize.models.movie
    .update(req.body, { where: { id: req.params.movieId } })
    .then((nbRowsUpdated) => {
      res.send(nbRowsUpdated);
    });
});

module.exports = router;
