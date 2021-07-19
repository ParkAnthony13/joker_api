const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    app.get("/api/jokes", JokeController.getAllJokes) // works
    app.get("/api/jokes/:id", JokeController.getSingleJoke) // works
    app.post("/api/jokes/create", JokeController.createJoke) // works
    app.put("/api/jokes/update/:id", JokeController.updateAJoke) // works
    app.delete("/api/jokes/delete/:id", JokeController.deleteAJoke) // works
}
