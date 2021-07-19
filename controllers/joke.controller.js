const Joke = require("../models/joke.model")

module.exports.getAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => res.json({jokes: allJokes}))
        .catch(err => res.json({err}))
}

module.exports.getSingleJoke = (req,res) => { // needs to target id
    Joke.findOne({_id: req.params.id})
        .then(singleJokes => res.json({joke: singleJokes}))
        .catch(err => res.json({err}))
}

module.exports.createJoke = (req,res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({joke: newJoke}))
        .catch(err => res.json({err}))
}

module.exports.updateAJoke = (req,res) => { // needs to target id
    Joke.updateOne({_id: req.params.id},req.body)
        .then(updateJoke => res.json({joke: updateJoke}))
        .catch(err => res.json({err}))
}

module.exports.deleteAJoke = (req,res) => { // needs to target id
    Joke.deleteOne({_id: req.params.id})
        .then(deleteJoke => res.json({deleteJoke: deleteJoke}))
        .catch(err => res.json({err}))
}