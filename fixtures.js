const sequelize = require("./models");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion établie!");

    sequelize.sync({ force: true }).then(() => {
      console.log("Les tables de ma BDD ont été bien générées!");
      sequelize.models.movie.create({
        title: "Cars 3",
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        director: "Charlito Leroy",
        actorsList: ["JB Lavisse", "Baptiste Poulain"]
      });
      sequelize.models.movie.create({
        title: "Les devs en sueur",
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        director: "Jb Lavisse",
        actorsList: ["Jsais pasqui", "jsaispas Qui"]
      });
      sequelize.models.opinion.create({
        pseudo: "Charlito",
        grade: 3,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        movieId: 2
      });
      sequelize.models.opinion.create({
        pseudo: "Emi",
        grade: 4,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
        movieId: 1
      });
    });
  })
  .catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`);
  });
