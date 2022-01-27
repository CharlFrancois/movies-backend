const express = require("express");
const router = express.Router();
const sequelize = require("../models");

router.get("/", (req, res) => {
  sequelize.models.opinion.findAll().then((opinion) => {
    res.status(200).json(opinion);
  });
});

router.get("/:opinionId", (req, res) => {
  sequelize.models.opinion.findByPk(req.params.opinionId).then((opinion) => res.json(opinion));
});

router.delete("/:opinionId", (req, res) => {
  sequelize.models.opinion
    .destroy({
      where: { id: req.params.opinionId },
    })
    .then(() => res.json({ msg: `Opinion ${req.params.opinionId} supprimé` }));
});

router.post("/", (req, res) => {
  sequelize.models.opinion.create(req.body).then((opinionCreated) => {
    res.status(201).json(opinionCreated);
  });
});

router.patch("/:opinionId", (req, res) => {
  sequelize.models.opinion
    .update(req.body, { where: { id: req.params.opinionId } })
    .then((nbRowsUpdated) => {
      res.send(nbRowsUpdated);
    });
});

module.exports = router;
