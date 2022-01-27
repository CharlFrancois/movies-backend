const express = require("express");
const sequelize = require("./models");
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express();

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

const moviesRouter = require('./routes/moviesRouter')
app.use('/movies', moviesRouter)

const opinionsRouter = require('./routes/opinionsRouter')
app.use('/opinions', opinionsRouter)

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");

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
    
    app.listen(process.env.PORT, () => {
      console.log(`Je suis en mode ${process.env.NODE_ENV}`);
      console.log(`App listening at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to the database");
    console.log(err.message);
    process.exit;
  });